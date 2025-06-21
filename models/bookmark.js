'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {
      Bookmark.belongsTo(models.User);
      Bookmark.belongsTo(models.Scholarship);
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