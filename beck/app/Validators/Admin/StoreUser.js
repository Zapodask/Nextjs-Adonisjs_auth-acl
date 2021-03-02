'use strict'

class AdminStoreUser {
  get rules () {
    return {
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed',
      role: 'required'
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
      'role.required': 'A role é obrigatória.'
    }
  }
}

module.exports = AdminStoreUser
