'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.User, { through: 'Project_User' })
    }
  }
  Project.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.TEXT,
      startDate: DataTypes.STRING,
      totalMember: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Project',
    },
  )
  return Project
}
