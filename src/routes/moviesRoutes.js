const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const { body } = require('express-validator')

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);

const validations = [
    body('title').notEmpty().withMessage('Tienes que escribir un titulo'),
    body('rating').notEmpty().withMessage('Debes escribir un rating'),
    body('awards').notEmpty().withMessage('Debes escribir cantidad de awards'),
    body('releaseDate').notEmpty().withMessage('Debes escribir fecha de estreno'),
    body('length').notEmpty().withMessage('Debes escribir duración en cantidad de minutos'),
]

// Ejercicio 32 Clase en vivo - Microdesafio 1
router.get('/movies/add', moviesController.add);
router.post('/movies/create',validations, moviesController.create);
// Ejercicio 32 Clase en vivo - Microdesafio 2
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/update/:id', moviesController.update);
// Ejercicio 32 Clase en vivo - Microdesafio 2
router.get('/movies/delete/:id', moviesController.delete);
router.post('/movies/delete/:id', moviesController.destroy);


module.exports = router;