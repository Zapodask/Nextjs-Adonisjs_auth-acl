'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('Role')

//Definindo roles.
class RoleSeeder {
  async run () {
    await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Adiministrador do sistema'
    })

    await Role.create({
      name: 'Manager',
      slug: 'manager',
      description: 'Gerente'
    })

    await Role.create({
      name: 'Client',
      slug: 'client',
      description: 'Cliente'
    })
  }
}

module.exports = RoleSeeder
