const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

// Ejercicio 32 Clase en vivo - Microdesafio 1
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesController.create);
// Ejercicio 32 Clase en vivo - Microdesafio 2
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);
// Ejercicio 32 Clase en vivo - Microdesafio 2
router.get('/movies/delete/:id', moviesController.delete);
router.post('/movies/delete/:id', moviesController.destroy);


module.exports = router;