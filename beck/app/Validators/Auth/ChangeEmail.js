'use strict'

class AuthChangeEmail {
  get rules () {
    return {
      token: 'required',
      email: 'required|email|unique:users,email'
    }
  }

  get messages(){
    return {
      'token.required': 'O token é obrigatório',
      'email.required': 'O e-mail é obrigatório.',
      'email.email': 'E-mail inválido.',
      'email.unique': 'E-mail já existente.'
    }
  }
}

module.exports = AuthChangeEmail
