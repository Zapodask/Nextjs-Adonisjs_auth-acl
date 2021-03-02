'use strict'

class AuthLogin {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
  
  get messages(){
    return {
      'email.required': 'O e-mail é obrigatório.',
      'email.email': 'E-mail inválido.',     
      'password.required': 'A senha é obrigatória.',
    }
  }
}

module.exports = AuthLogin
