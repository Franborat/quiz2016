var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var userController = require('../controllers/user_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/author', function(req, res, next) {
  res.render('author');
});

router.param('quizId', quizController.load); //Autoload quizId
router.param('userId', userController.load);  // Autoload :userId


// Definición de rutas de cuenta
router.get('/users',                    userController.index);   // listado usuarios
router.get('/users/:userId(\\d+)',      userController.show);    // ver un usuario
router.get('/users/new',                userController.new);     // formulario sign un
router.post('/users',                   userController.create);  // registrar usuario
router.get('/users/:userId(\\d+)/edit', userController.edit);     // editar información de cuenta
router.put('/users/:userId(\\d+)',      userController.update);   // actualizar información de cuenta
router.delete('/users/:userId(\\d+)',   userController.destroy);  // borrar cuenta


// Definición de rutas de /quizzes
// Definición de rutas de /quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

router.get('/quizzes/:quizId(\\d+)/comments/new',  commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments',     commentController.create);

router.get('/quizzes/search', quizController.search);
router.get('/quizzes/:texto_a_buscar/search', quizController.search);

//Definicion de rutas de session

router.get('/session',    sessionController.new);     // formulario login
router.post('/session',   sessionController.create);  // crear sesión
router.delete('/session', sessionController.destroy); // destruir sesión

module.exports = router;
