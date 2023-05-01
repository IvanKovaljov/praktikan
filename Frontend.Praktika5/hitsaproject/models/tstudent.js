const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tstudent', {
    studcode: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    personalid: {
      type: DataTypes.CHAR(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    city: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "aktiivne"
    }
  }, {
    sequelize,
    tableName: 'tstudent',
    schema: 'public',
    timestamps: false
  });
};
