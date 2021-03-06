const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Time', {
      
      id: {
        type: DataTypes.UUID,   // para que no choque con los ID de la api
        unique: true,
        primaryKey: true, // indica que el ID es la PK
        defaultValue: DataTypes.UUIDV4
      },
  
      stepTime: {
        type: DataTypes.STRING,
        
      },
  },
     {          // para no tener que agregar todos estos datos cuando mando un post
       timestamps: false,
       createdAt: false,
       updatedAt: false
   
   });
  };