var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('knex'))
    .then(function (users) {
      res.send({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', function (req, res) {
  const id = Number(req.params.id)
  db.getUser(id, req.app.get('knex'))
    .then(function (user) {
      res.json(user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/names', function (req, res) {
  db.getUserList(req.app.get('knex'))
    .then(function (users) {
      res.send({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', function (req, res) {
  const name = req.body.name
  const email = req.body.email
  console.log(req.body)
  db.addUser(name, email, req.app.get('knex'))
    .then(function () {
      res.send('User Added')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/update', function (req, res) {
  const id = req.body.id
  const name = req.body.name
  const email = req.body.email
  console.log(req.body)
  db.updateUser(id, name, email, req.app.get('knex'))
    .then(function () {
      res.send('User Updated')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
