'use strict'

const Transformer = use('App/Transformers/UserTransformer')

class ProfileController {
    async show ({response, auth, transform}) {
        var user = await auth.getUser()
        user = await transform.item(user, Transformer)

        return response.status(200).send(user)
    }
}

module.exports = ProfileController
