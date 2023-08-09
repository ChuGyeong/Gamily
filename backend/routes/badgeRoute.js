const express = require('express');
const { getMyBadge, getBadgeData, addBadge } = require('../controllers/badgeController');
const badgeRouter = express.Router();

badgeRouter.get('/', getBadgeData);
badgeRouter.get('/:email', getMyBadge);
badgeRouter.post('/addBadge', addBadge);

module.exports = badgeRouter;
