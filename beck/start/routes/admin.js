'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.resource('users', 'UserController').only(['index', 'show'])

    Route.post('users', 'UserController.store').validator('Admin/StoreUser').middleware(['auth', 'is:(admin)'])
}).prefix('admin').namespace('Admin').middleware(['auth', 'is:(admin or manager) && !client'])