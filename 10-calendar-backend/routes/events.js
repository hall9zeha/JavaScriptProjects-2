
const {Router} = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/jws-validator');
const { check } = require('express-validator');
const { fieldValidate } = require('../middlewares/field-validators');
const { isDate } = require('../helpers/isDate');
const router = Router();


/*
Al utilizar validateJWT en cada ruta de la siguiente manera:
ex: router.get('/',validate,getEvents), haríamos esto en cuatro lugares.
Tenemos la opción de declarar esta acción de validar token una sola vez para que se ejecute antes de cada ruta llamada
*/
router.use(validateJWT);


//Get events

router.get('/', getEvents);

//Create new event
router.post('/',
    [
        check('title','The title is required').not().isEmpty(),
        check('start','Initial date is required').custom(isDate),
        check('end','End date is required').custom(isDate),
        fieldValidate
    ],
    createEvent);

//Update event
router.put('/:id',updateEvent);

//Delete event
router.delete('/:id',deleteEvent);


module.exports = router;
