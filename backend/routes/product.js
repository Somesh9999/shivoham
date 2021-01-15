const express= require('express');
const router = express.Router();

const extractFile= require('../middleware/mime-type');
const productController= require('../controllers/product');

router.post("/addProductType",extractFile,productController.addProductType);

router.get("/getProductType",productController.getProductType);

module.exports=router;
