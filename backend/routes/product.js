const express= require('express');
const router = express.Router();

const extractFile= require('../middleware/mime-type');
const productController= require('../controllers/product');

router.post("/addProductType",extractFile,productController.addProductType);

router.post("/addProductBrand",extractFile,productController.addProductBrand);

router.get("/getProductType",productController.getProductType);

router.get("/getProductBrand",productController.getProductBrand);

module.exports=router;
