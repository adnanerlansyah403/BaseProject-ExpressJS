'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, {
        as: 'Customer',
        foreignKey: "userId",
      })
    }
  }
  Customer.init({
    notelp: DataTypes.INTEGER,
    address: DataTypes.STRING,
    age: DataTypes.INTEGER,
    birthdate: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
  });
  return Customer;
};