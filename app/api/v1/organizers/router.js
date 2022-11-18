const express = require('express');
router = express();
const { createCMSOrganizer, createCMSUser } = require('./controller');

const { authenticateUser } = require('../../../middlewares/auth')

router.post('/organizers', createCMSOrganizer);
router.post('/users', authenticateUser, createCMSUser);

module.exports = router;