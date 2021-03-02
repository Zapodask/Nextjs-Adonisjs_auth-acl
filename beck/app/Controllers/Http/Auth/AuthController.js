'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Role = use('Role')
const Hash = use('Hash')
const Transformer = use('App/Transformers/UserTransformer')

class AuthController {
    async register ({ request, response, transform, auth}) {
        const trx = await Database.beginTransaction()
        try {
            //Criando usuário.
            const data = request.only(['name', 'surname', 'email', 'password'])
            var user = await User.create(data, trx)

            //Definindo role.
            const userRole = await Role.findBy('slug', 'client')
            await user.roles().attach([userRole.id], null, trx)

            await trx.commit()

            //Aplicando transformer.
            user = await transform.item(user, Transformer)

            const token = await auth.withRefreshToken().attempt(data.email, data.password)
            
            return response.status(200).send({
                token,
                user
            })
        } catch (error) {
            await trx.rollback()
            
            return response.status(400).send({
                message: 'Erro ao realizar o cadastro.'
            })
        }
    }

    async login ({ request, response, auth, transform }) {
        try {   
            const { email, password } = request.only(['email', 'password'])
            
            //Validando usuário.
            var token = await auth.withRefreshToken().attempt(email, password)

            var user = await User.findBy('email', email)
            user = await transform.item(user, Transformer)

            return response.status(200).send({
                token,
                user
            })
        } catch (error) {
            console.log(error)
            return response.status(400).send({
                message: 'Erro ao iniciar a sessão.'
            })
        }
    }

    async refresh ({ request, response, auth }) {
        var refresh_token = request.input('refresh_token')

        if(!refresh_token) {
            refresh_token = request.header('refresh_token')
        }

        //Gerando novo token com o refresh-token.
        const token = await auth.newRefreshToken().generateForRefreshToken(refresh_token, true)

        return response.status(200).send(token)
    }

    async changePassword ({ request, response, auth }) {
        //Verificando usuário.
        var user = await auth.getUser()

        const { password, newPassword } = request.only(['password', 'newPassword'])

        //Verificando se a senha é válida.
        const passwordCheck = await Hash.verify(password, user.password)

        if (!passwordCheck) {
            return response.status(400).send({
                message: 'Senha inválida.'
            })
        }
        
        //Alterando a senha.
        user.password = newPassword

        await user.save()

        return response.status(200).send({
            message: 'Senha alterada com sucesso.'
        })
    }
}

module.exports = AuthController
