const express = require('express');
const router = express.Router();
const privateKeyController = require('../controllers/privateKeyController');

// Routes for private key operations
router.post('/privatekeys', privateKeyController.createPrivateKey);
router.get('/privatekeys', privateKeyController.getAllPrivateKeys);
router.get('/privatekeys/:id', privateKeyController.getSinglePrivateKey);
router.delete('/privatekeys/:id', privateKeyController.deleteSinglePrivateKey);

module.exports = router;
