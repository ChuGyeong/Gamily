const express = require('express');
const {
   addAdoptionApp,
   getMyAdoptionApp,
   delAdoptionApp,
   getAdoptionAppData,
   recognitionAdoptionApp,
} = require('../controllers/adoptionAppController');
const adoptionAppRouter = express.Router();

adoptionAppRouter.get('/getAdoptionAppData', getAdoptionAppData);
adoptionAppRouter.get('/getMyAdoptionApp/:email', getMyAdoptionApp);
adoptionAppRouter.post('/addAdoptionApp', addAdoptionApp);
adoptionAppRouter.delete('/delAdoptionApp/:AdoptionAppID', delAdoptionApp);
adoptionAppRouter.put('/recognitionAdoptionApp', recognitionAdoptionApp);

module.exports = adoptionAppRouter;
