const { Router } = require('express');

const { busquedaArticulosPorNombre,
    consultarArticuloPorId} = require('../controllers/endpoints');

const router = Router();

router.get('/', busquedaArticulosPorNombre );

router.get('/:id', consultarArticuloPorId );

module.exports = router;