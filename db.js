module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserList: getUserList
}

function getUsers (knex) {
  return knex('users').select()
}

function getUser (id, knex) {
  return knex('users').where('id', id).first()
}

function getUserList (knex) {
  return knex('users').select('name')
}
