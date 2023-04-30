const express = require('express');

const getBinById = require('../controllers/BinController.js');

const router = express.Router()

router.get('/bin/get/:id', getBinById);

module.exports = router;

