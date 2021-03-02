'use strict'

class AuthChangePassword {
  get rules () {
    return {
      password: 'required',
      newPassword: 'required|confirmed'
    }
  }

  get messages(){
    return {
      'password.required': 'A senha é obrigatória.',
      'newPassword.required': 'A nova senha é obrigatória.',
      'newPassword.confirmed': 'As senhas não são iguais.'
    }
  }
}

module.exports = AuthChangePassword
