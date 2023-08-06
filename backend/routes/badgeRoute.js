const express = require('express');
const { getMyBadge, getBadgeData } = require('../controllers/badgeController');
const authRouter = express.Router();

authRouter.get('/', getBadgeData);
authRouter.get('/:email', getMyBadge);

module.exports = authRouter;
