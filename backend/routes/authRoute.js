const express = require('express');
const {
   getAllAuthData,
   login,
   signUp,
   editAuth,
   getMyAuth,
   toggleFavDogs,
   addBadge,
} = require('../controllers/authController');
const authRouter = express.Router();

authRouter.get('/getAllAuth', getAllAuthData);
authRouter.post('/getMyAuth', getMyAuth);
authRouter.put('/', editAuth);
authRouter.post('/login', login);
authRouter.post('/signUp', signUp);
authRouter.put('/toggleFavDogs', toggleFavDogs);
authRouter.post('/quiz', addBadge);

module.exports = authRouter;
