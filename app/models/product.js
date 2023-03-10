'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Customer, {
        through: "orders",
        foreignKey: "productId",
        otherKey: "customerId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  product.init({
    nama: DataTypes.STRING,
    uom: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};