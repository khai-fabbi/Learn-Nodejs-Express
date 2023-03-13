import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'

// get the promise implementation, we will use bluebird
import bluebird from 'bluebird'

const salt = bcrypt.genSaltSync(10)

const getHashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

const createNewUser = async (email, username, password) => {
  let hashPass = getHashPassword(password)

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_db',
    port: '3307',
    Promise: bluebird,
  })
  try {
    const [rows, fields] = await connection.execute(
      `INSERT INTO users(email, username, password)
    VALUES (?, ?, ?)`,
      [email, username, hashPass],
    )
    return rows
  } catch (error) {
    console.log(error)
  }
}

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_db',
    port: '3307',
    Promise: bluebird,
  })
  try {
    const [rows, fields] = await connection.execute('Select * from users')
    return rows
  } catch (error) {
    console.log(error)
  }
}
const getUserDetail = async (userId) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_db',
    port: '3307',
    Promise: bluebird,
  })
  try {
    const [rows, fields] = await connection.execute('Select * from users where id=?', [userId])
    return rows
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_db',
    port: '3307',
    Promise: bluebird,
  })
  try {
    const [rows, fields] = await connection.execute('Delete from users where id=?', [id])
    return rows
  } catch (error) {
    console.log(error)
  }
}
const updateUser = async (id, username, email) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express_db',
    port: '3307',
    Promise: bluebird,
  })
  try {
    const [rows, fields] = await connection.execute(
      'Update users SET username=?, email=? WHERE id=?',
      [username, email, id],
    )
    return rows
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserDetail,
  updateUser,
}
