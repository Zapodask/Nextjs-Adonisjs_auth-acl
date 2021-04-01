'use strict'

const { randomBytes } = require('crypto')
const { promisify } = require('util')
const { parseISO, isBefore, subHours } = require('date-fns')

const Token = use('App/Models/Token')
const Mail = use('Mail')
const Env = use('Env')

class ChangeEmailController {
    async reqChangeEmail({ response, auth }) {
        try {
            //Verificando usuário.
            var user = await auth.getUser()

            //Gerando token.
            const random = await promisify(randomBytes)(24)
            const token = random.toString('hex')
    
            await user.tokens().create({
                token,
                type: 'changeEmail'
            })
    
            //Gerando url para resetar a senha.
            const Url = `${Env.get('FRONT_URL')}/profile/change-email/${token}`

            //Enviando email.
            await Mail.send('emails.changeemail', { name: user.name, token, Url }, (message) => {
                message
                  .to(user.email)
                  .from('support-mail@gmail.com')
                  .subject('Troca de email')
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

    async changeEmail ({ request, response }) {
        try {
            const { token, email } = request.only(['token', 'email']);

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

            //Alterando o email.
            user.email = email

            await user.save()

            //Revogando token.
            userToken.is_revoked = true

            await userToken.save()

            return response.status(200).send({
                message: 'Email alterado com sucesso.'
            })
        } catch (error) {
            return response.status(400).send({
                message: 'Erro ao alterar o email.'
            })
        }
    }
}

module.exports = ChangeEmailController
