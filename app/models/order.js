'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  order.init({
    tanggal_order: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: ['paid', 'unpaid'],
      defaultValue: 'unpaid',
    }
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};