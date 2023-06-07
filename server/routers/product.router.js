const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/jwt.middleware');
const { tackTwo, tackThere, tackFour } = require('../controllers/task.controller');


// task: #2
router.get('/products',tackTwo);

// task: #3
router.get("/jwt",tackThere);

// task: #4
router.get("/verifie",authenticate,tackFour);

module.exports = router;