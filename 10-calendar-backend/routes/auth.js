/*
User routes /auth
host + /api/auth

*/

const {Router} = require('express');
const router = Router();
const {check} = require('express-validator')

const {createUser, login,renewToken} = require('../controllers/auth');
const { fieldValidate } = require('../middlewares/field-validators');

router.post('/new',
    //Midlewares para validar los campos necesarios, comenzamos a hacerlos aquí y los recibimos en nuestros controllers

    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'The password must have 6 or more characters').isLength({min:6}),
        fieldValidate
    ],    
    createUser)
router.post('/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'The password must have 6 or more characters').isLength({min:6}),
        fieldValidate
    ],
    login)
router.get('/renew',renewToken)

module.exports = router;