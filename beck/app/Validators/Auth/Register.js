'use strict'

class AuthRegister {
  get rules () {
    return {
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed|min:8'
    }
  }

  get messages(){
    return {
      'name.required': 'O nome é obrigatório.',
      'surname.required': 'O sobrenome é obrigatório.',
      'email.required': 'O e-mail é obrigatório.',
      'email.email': 'E-mail inválido.',
      'email.unique': 'E-mail já existente.',
      'password.required': 'A senha é obrigatória.',
      'password.confirmed': 'As senhas não são iguais.',
      'password.min': 'A senha deve ter no mínimo 8 dígitos.'
    }
  }
}

module.exports = AuthRegister
