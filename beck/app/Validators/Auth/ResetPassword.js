'use strict'

class AuthResetPassword {
  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed|min:8'
    }
  }

  get messages(){
    return {
      'token.required': 'O token é obrigatório',
      'password.required': 'A senha é obrigatória.',
      'password.confirmed': 'As senhas não são iguais.',
      'password.min': 'A senha deve ter no mínimo 8 dígitos.'
    }
  }
}

module.exports = AuthResetPassword
