'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {
      // relasi ke user
      Bookmark.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      // relasi ke scholarship
      Bookmark.belongsTo(models.Scholarship, {
        foreignKey: 'scholarshipId',
        onDelete: 'CASCADE'
      });
    }
  }
  Bookmark.init({
    userId: DataTypes.INTEGER,
    scholarshipId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};