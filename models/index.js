var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
//  - DATABASE_URL = sqlite:///
//  -DATABASE_STORAGE = quiz.sqlite
// Usar BBDD Postgress:
//  -DATABASE_URL = postgress://user:passwd@host:port/database


// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null, 
                       		  { dialect: "sqlite", 
                       		    storage: "quiz.sqlite"
                       		  });

// Importar la definicion de la tabla Quiz de quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));


exports.Quiz = Quiz; // exportar definición de tabla Quiz