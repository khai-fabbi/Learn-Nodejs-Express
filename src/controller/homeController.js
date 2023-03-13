import { createNewUser } from '../service/userService'
const handleHomePage = (req, res) => {
  const context = {
    name: 'Quang Khai',
  }
  return res.render('home.ejs', context)
}

const handleCreateUser = (req, res) => {
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  createNewUser(email, username, password)
  return res.send('Create User')
}

module.exports = {
  handleHomePage,
  handleCreateUser,
}
