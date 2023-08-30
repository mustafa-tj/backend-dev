const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const contactController = require('../controllers/contactus');

router.get('/contactus',contactController.contactForm);

router.post('/success',contactController.formSuccess);

module.exports = router;