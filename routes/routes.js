const express = require('express')
const router = express.Router()

// Import controllers
const itemController = require('../controllers/itemController')

// Routes
router.get('/items', itemController.getItems)

module.exports = router
