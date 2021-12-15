const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Language = sequelize.define(
   "language",
   {
      LanguageID: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
      },
      Language: {
         type: DataTypes.STRING(50),
         allowNull: false,
      },
   },
   {
      tableName: "language",
      timestamps: false,
   }
);

module.exports = Language;
