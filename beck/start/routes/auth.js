'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post('register', 'AuthController.register').as('auth.register').middleware(['guest']).validator('Auth/Register')
    Route.post('login', 'AuthController.login').as('auth.login').middleware(['guest']).validator('Auth/Login')

    Route.post('refresh', 'AuthController.refresh').as('auth.refresh')
    Route.put('change-password', 'AuthController.changePassword').as('auth.reset').middleware(['auth']).validator('Auth/ChangePassword')

    Route.post('forgot-password', 'ForgotPasswordController.forgot').as('auth.forgot').middleware(['guest'])
    Route.put('reset-password', 'ForgotPasswordController.reset').as('auth.reset').middleware(['guest']).validator('Auth/ResetPassword')

    Route.post('send-change-email', 'ChangeEmailController.reqChangeEmail').as('auth.reqChangeEmail').middleware(['auth'])
    Route.put('change-email', 'ChangeEmailController.changeEmail').as('auth.changeEmail').validator('Auth/ChangeEmail')
}).prefix('auth').namespace('Auth')