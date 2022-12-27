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
      // this.belongsTo(models.Customer, {
      //   as: 'Customer',
      //   foreignKey: "userId",
      // })
      this.belongsToMany(models.Product, {
        through: 'orders',
        foreignKey: "customerId",
        otherKey: "productId",
      })
    }
  }
  Customer.init({
    telp: DataTypes.INTEGER,
    nik: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    jenis_kelamin: {
      type: DataTypes.ENUM,
      values: ["L", "P"],
      defaultValue: "L",
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
  });
  return Customer;
};