const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('express_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3307',
})

const testConnectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = {
  testConnectDB,
}
