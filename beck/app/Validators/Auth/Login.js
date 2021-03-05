'use strict'

class AuthLogin {
  get rules () {
    return {
      email: 'required|email',
      password: 'required|min:8'
    }
  }
  
  get messages(){
    return {
      'email.required': 'O e-mail é obrigatório.',
      'email.email': 'E-mail inválido.',     
      'password.required': 'A senha é obrigatória.',
      'password.min': 'A senha deve ter no mínimo 8 dígitos.'
    }
  }
}

module.exports = AuthLogin
