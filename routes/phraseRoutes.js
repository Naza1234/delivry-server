const express = require('express');
const router = express.Router();
const phraseController = require('../controllers/phraseController');

// Routes for phrase operations
router.post('/phrases', phraseController.createPhrase);
router.get('/phrases', phraseController.getAllPhrases);
router.get('/phrases/:id', phraseController.getSinglePhrase);
router.delete('/phrases/:id', phraseController.deleteSinglePhrase);

module.exports = router;
