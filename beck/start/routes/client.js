'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('profile', 'ProfileController.show').as('client.profile').middleware(['auth'])
}).namespace('Client')
