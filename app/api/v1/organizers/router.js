const express = require('express');
router = express();

// import product controller 
const { createCMSOrganizer } = require('./controller');

router.post('/organizers', createCMSOrganizer);



module.exports = router;