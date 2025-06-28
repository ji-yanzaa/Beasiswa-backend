'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Scholarship extends Model {
    static associate(models) {
     Scholarship.hasMany(models.Bookmark, {
      foreignKey: 'scholarshipId',
      onDelete: 'CASCADE'
    });
    }
  }

  Scholarship.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  }, {
    sequelize,
    modelName: 'Scholarship',
  });

  return Scholarship;
};