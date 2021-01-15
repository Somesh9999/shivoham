const ProductType=require('../models/productType');

exports.addProductType=(req,res,next)=>{
  const url= req.protocol + "://" + req.get('host');
  const productType= new ProductType({
    type: req.body.type,
    image: url+"/images/"+req.file.filename
  });

  productType.save().then(createdProductType=>{
    res.status(201).json({
      message:"Prduct Added Successfully",
      productType:createdProductType
    })
  });
}

exports.getProductType=(req,res,next)=>{
  const pageSize= +req.query.pageSize;
  const currentPage= +req.query.currentPage;
  let fetchedData;

  // this is done when we need to add a chain of actions to the database call, simply manipulate the call.
  const productQuery= ProductType.find();

  if(pageSize && currentPage){
    productQuery                           // this is done when we need to skip the initials posts and limit the number of posts
    .skip(pageSize * (currentPage-1))
    .limit(pageSize);
  }
  productQuery.then((document)=>{
    // This a subquery where we execute the count query on document fetched from find query and then  forward that count object ahead to bind it to the response.
    fetchedData=document;
    return ProductType.count();       // return an observable which is handle in the then block later

  }).then((count)=>{
    res.status(200).json(
      {
        message: "This is message from server",
        productTypes: fetchedData,
        productCount: count
      }
    );
  }).catch(()=>{
    res.status(500).json({
      message:"Fetching Posts Failed!"
    })
  });
}
