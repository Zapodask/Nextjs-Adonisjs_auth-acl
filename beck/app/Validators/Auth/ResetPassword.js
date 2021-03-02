'use strict'

class AuthResetPassword {
  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }

  get messages(){
    return {
      'token.required': 'O token é obrigatório',
      'password.required': 'A senha é obrigatória.',
      'password.confirmed': 'As senhas não são iguais.'
    }
  }
}

module.exports = AuthResetPassword
