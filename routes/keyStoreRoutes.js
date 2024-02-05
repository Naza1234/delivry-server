const express = require('express');
const router = express.Router();
const keyStoreController = require('../controllers/keyStoreController');

// Routes for key store operations
router.post('/keystores', keyStoreController.createKeyStore);
router.get('/keystores', keyStoreController.getAllKeyStores);
router.get('/keystores/:id', keyStoreController.getSingleKeyStore);
router.delete('/keystores/:id', keyStoreController.deleteSingleKeyStore);

module.exports = router;
