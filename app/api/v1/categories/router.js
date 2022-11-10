const express = require('express');
router = express();

// import product controller 
const { create, index, find, update, destroy } = require('./controller');

router.get('/categories', index)
router.post('/categories', create);
router.get('/categories/:id', find);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);


module.exports = router;