const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vw_archive_10000rows', {
    controllersensorid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sensor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    controller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valuetype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hour_avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vw_archive_10000rows',
    schema: 'public',
    timestamps: false
  });
};
