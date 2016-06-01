// Definicion del modelo Comments:

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment',
                          { text: { type: DataTypes.STRING,
                          	        validate: { notEmpty: {msg: "Falta Comentario"}}
                          	      },
                          	accepted: { type: DataTypes.STRING,
                          		defaultValue: false} //Si es true el comentario ha sido aceptado
                          });
};