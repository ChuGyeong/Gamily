const express = require('express');
const {
   getAllAuthData,
   login,
   signUp,
   editAuth,
   getMyAuth,
   toggleFavDogs,
   addInCart,
   removeInCart,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
} = require('../controllers/authController');
const authRouter = express.Router();

authRouter.get('/getAllAuth', getAllAuthData);
authRouter.post('/getMyAuth', getMyAuth);
authRouter.put('/', editAuth);
authRouter.post('/login', login);
authRouter.post('/signUp', signUp);
authRouter.put('/toggleFavDogs', toggleFavDogs);
authRouter.put('/addInCart', addInCart);
authRouter.delete('/removeInCart', removeInCart);
authRouter.put('/cart/quantityUp', quantityUp);
authRouter.put('/cart/quantityDown', quantityDown);
authRouter.put('/cart/onCheckbox', onCheckbox);
authRouter.put('/cart/toggleCheckbox', toggleCheckbox);

module.exports = authRouter;
