const { Router } = require('express');

const router = Router();

// importaciones
const { CreateTime } = require('../controllers/TimePerson.controller');

// Routes
router.post('/time', CreateTime)


module.exports = router;
