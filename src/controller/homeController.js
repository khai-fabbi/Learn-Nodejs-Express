import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'express_db',
  port: '3307',
})

const handleHomePage = (req, res) => {
  const context = {
    name: 'Quang Khai',
  }
  return res.render('home.ejs', context)
}

const handleCreateUser = (req, res) => {
  console.log('🚀 ~ file: homeController.js:9 ~ handleCreateUser ~ req:', req.body)
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password

  return res.send('Create User')
}

module.exports = {
  handleHomePage,
  handleCreateUser,
}
