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

// Importar la definicion de la tabla Comments de comment.js
var Comment = sequelize.import(path.join(__dirname,'comment'));

// Importar la definicion de la tabla Comments de comment.js
var User = sequelize.import(path.join(__dirname,'user'));

// Relaciones entre modelos
Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);


exports.Quiz = Quiz; // exportar definición de tabla Quiz
exports.Comment = Comment; // exportar definición de tabla Comments
exports.User = User; //exportar definicion de la tabla User