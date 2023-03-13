import bcrypt from 'bcryptjs'
import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'express_db',
  port: '3307',
})

const salt = bcrypt.genSaltSync(10)

const getHashPassword = (password) => {
  return bcrypt.hashSync(password, salt)
}

const createNewUser = (email, username, password) => {
  let hashPass = getHashPassword(password)

  connection.query(
    `INSERT INTO users(email, username, password)
  VALUES (?, ?, ?)`,
    [email, username, hashPass],
    (err, results, _) => {
      if (err) {
        console.log(err)
      }
      console.log(results)
    },
  )
}

module.exports = {
  createNewUser,
}
