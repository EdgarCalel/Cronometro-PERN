const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Persona', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    stepTime:{
      type: DataTypes.JSON,
      allowNull: false,
    },


  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
