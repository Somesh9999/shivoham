const mongoose= require('mongoose');

const productBrandSchema= mongoose.Schema({
  type: {type: String, required: true},
  brand:{type: String, required: true},
  image: {type: String, required: true}
});

const productBrandModel= mongoose.model('ProductBrand', productBrandSchema );
module.exports= productBrandModel;
