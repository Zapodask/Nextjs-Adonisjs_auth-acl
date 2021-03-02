'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.enu('role', ['admin', 'manager', 'client']).defaultTo('client')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
