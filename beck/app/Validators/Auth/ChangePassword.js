'use strict'

class AuthChangePassword {
  get rules () {
    return {
      password: 'required|min:8',
      newPassword: 'required|confirmed|min:8'
    }
  }

  get messages(){
    return {
      'password.required': 'A senha é obrigatória.',
      'newPassword.required': 'A nova senha é obrigatória.',
      'newPassword.confirmed': 'As senhas não são iguais.',
      'password.min': 'A senha deve ter no mínimo 8 dígitos.',
      'newPassword.min': 'A  nova senha deve ter no mínimo 8 dígitos.'
    }
  }
}

module.exports = AuthChangePassword
