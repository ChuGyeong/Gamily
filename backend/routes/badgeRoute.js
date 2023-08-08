const express = require('express');
const { getMyBadge, getBadgeData } = require('../controllers/badgeController');
const badgeRouter = express.Router();

badgeRouter.get('/', getBadgeData);
badgeRouter.get('/:email', getMyBadge);

module.exports = badgeRouter;
