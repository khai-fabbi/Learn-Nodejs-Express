const db = require('../models')

const findAllUser = async (request, response) => {
  try {
    const userList = await db.User.findAll({
      attributes: ['id', 'username', 'email', 'age', 'sex'],
      include: {
        model: db.Group,
        attributes: ['id', 'name', 'description'],
      },
      raw: true,
      nest: true,
    })

    response.status(200).json({
      status: 'success',
      results: userList.length,
      data: userList,
    })
  } catch (error) {
    response.status(500).json({
      status: 'error',
      message: error.message,
    })
  }
}

module.exports = {
  findAllUser,
}
