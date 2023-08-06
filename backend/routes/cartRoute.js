const express = require('express');
const {
   addInCart,
   getCartData,
   getMyCart,
   quantityUp,
   quantityDown,
   onCheckbox,
   toggleCheckbox,
   checkProductDel,
   allProductDel,
   checkProductOrder,
   allProductOrder,
} = require('../controllers/cartController');
const cartRouter = express.Router();

cartRouter.get('/getCartData', getCartData);
cartRouter.post('/getMyCart', getMyCart);
cartRouter.post('/addInCart', addInCart);
cartRouter.put('/quantityUp', quantityUp);
cartRouter.put('/quantityDown', quantityDown);
cartRouter.put('/onCheckbox', onCheckbox);
cartRouter.put('/toggleCheckbox', toggleCheckbox);
cartRouter.put('/checkProductDel', checkProductDel);
cartRouter.put('/allProductDel', allProductDel);
cartRouter.put('/checkProductOrder', checkProductOrder);
cartRouter.put('/allProductOrder', allProductOrder);

module.exports = cartRouter;
