"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bookings.init(
    {
      patientName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patientAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      patientMobile: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      doctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "bookings",
    }
  );
  return bookings;
};
