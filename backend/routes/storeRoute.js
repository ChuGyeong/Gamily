const express = require('express');
const { getStoreData, getStoreItem } = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get('/', getStoreData);
storeRouter.get('/:id', getStoreItem);

module.exports = storeRouter;
