'use strict'

/*
|--------------------------------------------------------------------------
| AdminSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('Role')
const User = use('App/Models/User')

class AdminSeeder {
  async run () {
    //Criando usuário admin.
    const admin = await User.create({
      name: 'Admin',
      surname: '01',
      email: 'admin@base.com',
      password: 'secretPass',
      role: 'admin'
    })

    //Definindo usuário como admin.
    const adminRole = await Role.findBy('slug', 'admin')
    await admin.roles().attach([adminRole.id])

    //Criando usuário manager.
    const manager = await User.create({
      name: 'Manager',
      surname: '01',
      email: 'manager@base.com',
      password: 'secretPass',
      role: 'manager'
    })

    //Definindo usuário como manager.
    const managerRole = await Role.findBy('slug', 'manager')
    await manager.roles().attach([managerRole.id])
  }
}

module.exports = AdminSeeder
