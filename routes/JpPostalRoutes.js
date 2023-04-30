
const express = require('express')

const getJpPostalsById = require('../controllers/JpPostalController.js');

const router = express.Router()


router.get('/' , (req, res) => {
    res.send('Hello World');
});
router.get('/jp/postal/get/:id',getJpPostalsById);

module.exports = router;