const mongoose= require('mongoose');

const productTypeSchema= mongoose.Schema({
  type: {type: String, required: true},
  image: {type: String, required: true}
});

const productTypeModel= mongoose.model('ProductType', productTypeSchema );
module.exports= productTypeModel;
