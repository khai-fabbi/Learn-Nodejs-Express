import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'
import bluebird from 'bluebird'
import db, { User } from '../models'
const salt = bcrypt.genSaltSync(10)

const getHashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

const createNewUser = async (email, username, password) => {
  let hashPass = getHashPassword(password)
  await User.create({ email, username, password: hashPass })
}

const getUserList = async () => {
  const userList = await User.findAll()
  return userList
}
const getUserDetail = async (userId) => {
  const user = await User.findByPk(userId)
  if (!user) {
    console.log(user)
    return
  }
  return user
}

const deleteUser = async (userId) => {
  await User.destroy({
    where: {
      id: userId,
    },
  })
}
const updateUser = async (id, username, email) => {
  await User.update(
    { username, email },
    {
      where: {
        id: id,
      },
    },
  )
}
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserDetail,
  updateUser,
}
