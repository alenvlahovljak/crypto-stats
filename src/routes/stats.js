// require necessary modules
const express = require('express');

// configure Express application
const router = express.Router();

// require stats handlers
const {
  statsControllers: { home }
} = require('../controllers');

// define stats routes
router.get('/', home);

// export stats routes
module.exports = router;
