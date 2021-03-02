'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const Role = use('Role')
const Database = use('Database')
const Transformer = use('App/Transformers/UserTransformer')

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, pagination, transform }) {
    const query = User.query()

    //Pesquisa por nome, sobrenome e email.
    const name = request.input('name')
    const surname = request.input('surname')
    const email = request.input('email')

    if (name) {
      query.where('name', 'ILIKE', `%${name}%`)
    }
    if (surname) {
      query.orWhere('surname', 'ILIKE', `%${surname}%`)
    }
    if (email) {
      query.orWhere('email', 'ILIKE', `%${email}%`)
    }

    //Aplicando paginação.
    var users = await query.paginate(pagination.page, pagination.limit)

    //Aplicando transformer.
    users = await transform.paginate(users, Transformer)

    return response.status(200).send(users)
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, transform }) {
    const trx = await Database.beginTransaction()
    
    try {
      //Criando usuário.
      const { role, ...data } = request.only(['name', 'surname', 'email', 'password', 'role'])
      var user = await User.create({ role: role, ...data }, trx)

      //Definindo role.
      if (role === 'client'){
        const userRole = await Role.findBy('slug', 'client')
        await user.roles().attach([userRole.id], null, trx)
      }
      if (role === 'manager') {
        const userRole = await Role.findBy('slug', 'manager')
        await user.roles().attach([userRole.id], null, trx)
      }
      if (role === 'admin') {
        const userRole = await Role.findBy('slug', 'admin')
        await user.roles().attach([userRole.id], null, trx)
      }


      await trx.commit()

      //Aplicando transformer.
      user = await transform.item(user, Transformer)

      return response.status(200).send(user)
    } catch (error) {
      await trx.rollback()
      
      return response.status(400).send({
          message: 'Erro ao cadastrar o usuário.'
      })
    }
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params: { id }, response,  transform }) {
    //Procurando usuário pelo id.
    var user = await User.findOrFail(id)

    //Aplicando transformer.
    user = await transform.item(user, Transformer)

    return response.status(200).send(user)
  }
}

module.exports = UserController
