const express = require('express');
const router = express.Router();
const { handleLinkedInAuth, handleCallback } = require('../controllers/authController');

router.get('/login', handleLinkedInAuth);
router.get('/callback', handleCallback);

module.exports = router;
