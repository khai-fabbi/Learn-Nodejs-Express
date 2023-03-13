import {
  createNewUser,
  getUserList,
  deleteUser,
  getUserDetail,
  updateUser,
} from '../service/userService'
const handleHomePage = async (req, res) => {
  let userList = await getUserList()
  const context = {
    name: 'Quang Khai',
    userList,
  }
  return res.render('home.ejs', context)
}

const handleCreateUser = async (req, res) => {
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  await createNewUser(email, username, password)
  return res.redirect('/')
}
const handleDeleteUser = async (req, res) => {
  const userId = req.params.id
  await deleteUser(userId)
  return res.redirect('/')
}
const handleDetailUser = async (req, res) => {
  const userId = req.params.id
  let userDetail = await getUserDetail(userId)
  console.log('🚀 ~ file: homeController.js:26 ~ handleDetailUser ~ userDetail:', userDetail)
  let userList = await getUserList()
  const context = {
    name: 'Quang Khai',
    userList,
    userDetail: userDetail[0],
  }
  return res.render('update-user.ejs', context)
}
const handleUpdateUser = async (req, res) => {
  const userId = req.params.id
  let username = req.body.username
  let email = req.body.email
  await updateUser(userId, username, email)
  return res.redirect('/')
}

module.exports = {
  handleHomePage,
  handleCreateUser,
  handleDeleteUser,
  handleDetailUser,
  handleUpdateUser,
}
