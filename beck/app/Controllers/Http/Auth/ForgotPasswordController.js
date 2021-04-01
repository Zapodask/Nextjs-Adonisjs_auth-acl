'use strict'

const { randomBytes } = require('crypto')
const { promisify } = require('util')
const { parseISO, isBefore, subHours } = require('date-fns')

const User = use('App/Models/User')
const Token = use('App/Models/Token')
const Mail = use('Mail')
const Env = use('Env')

class ForgotPasswordController {
    async forgot ({ request, response }) {
        try {
            const { email } = request.only(['email'])

            //Procurando email.
            const user = await User.findBy('email', email)

            if (!user) {
                return response.status(400).send({
                    message: 'Email não encontrado.'
                })
            }
    
            //Gerando token.
            const random = await promisify(randomBytes)(24)
            const token = random.toString('hex')
    
            await user.tokens().create({
                token,
                type: 'forgotPassword'
            })
    
            //Gerando url para resetar a senha.
            const Url = `${Env.get('FRONT_URL')}/profile/reset-password/${token}`
    
            //Enviando email.
            await Mail.send('emails.forgotpassword', { name: user.name, token, Url }, (message) => {
              message
                .to(user.email)
                .from('support-mail@gmail.com')
                .subject('Recuperação de senha')
            })
    
            return response.status(200).send({
                message: 'Email enviado.'
            })
        } catch (error) {
            return response.status(400).send({
                message: 'Erro ao enviar o email.'
            })
        }

    }

    async reset ({ request, response }) {
        try {
            const { token, password } = request.only(['token', 'password'])

            //Procurando token.
            const userToken = await Token.findByOrFail('token', token)

            //Verificando se o token foi gerado a mais de 2 horas.
            if (isBefore(parseISO(userToken.created_at), subHours(new Date(), 2))) {
                return response.status(400).send({
                    message: 'Token expirado.'
                })
            }

            //Verificando se o token já foi utilizado.
            if (userToken.is_revoked === true) {
                return response.status(400).send({
                    message: 'Token já utilizado.'
                })
            }

            const user = await userToken.user().fetch()
            
            //Alterando a senha.
            user.password = password

            await user.save()

            //Revogando token.
            userToken.is_revoked = true

            await userToken.save()
    
            return response.status(200).send({
                message: 'Senha alterada com sucesso.'
            })
        } catch (error) {
            return response.status(400).send({
                message: 'Erro ao alterar a senha.'
            })
        }

    }
}

module.exports = ForgotPasswordController
