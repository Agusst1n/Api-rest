import Product from "../models/Product";

export const getProducts = async (req, res) => {

  try {
    let products = await Product.find({});

    res.status(200).send({
      status: "Success",
      products
    })
    
  } catch (error) {
    
    res.status(400).send({
      status: "Fail",
      message: error
    })
  }



  // products.sort("-date").exec((err, product) => {
  //   if (err || !product) {
  //     return res.status(500).send({
  //       status: "Failed",
  //       message: err.stack,
  //     });
  //   }

  //   return res.status(200).send({
  //     status: "Success",
  //     products: product,
  //   });
  // });
};

export const getProductById = async (req, res) => {

  //!Ahora tengo que hacer una consulta para obtener
  //!el producto con esa id

  const { productId } = req.params;

  try {

    let product = await Product.findById(productId)

    res.status(200).send({
      status: "Success",
      product
    })
    
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: error
    })
  }

  // Product.findById(productId).exec(
  //       (err, productObtenido) => {
  //           if (err || !productObtenido) {
  //               return res.status(500).send({
  //                   status: "Fail",
  //                   message: err.stack
  //               });
  //           }

  //           return res.status(200).send({
  //               statusbar: "success",
  //               product: productObtenido
  //           });
  //       }
  //   );

};

export const createProducts = (req, res) => {
  const params = req.body;

  const product = new Product();

  (product.name = params.name),
    (product.caterogy = params.caterogy),
    (product.imgURL = params.imgURL),
    (product.price = params.price),
    (product.description = params.description);

  product.save((err, product) => {
    if (err || !product) {
      return res.status(400).send({
        status: "Failed",
        message: err.stack,
      });
    }

    res.status(201).send({
      status: "Success",
      products: product,
    });
  });
};

export const updateProducts = async (req, res) => {

  const { productId } = req.params;

  try {
    let productUpdate = await Product.findByIdAndUpdate(productId,req.body,{
      new: true
    })

    res.status(200).send({
      status: "Success",
      productUpdate
    })
  } catch (err) {
    res.status(400).send({
      status: "Fail",
      message: err 
    })
  }

  // Product.findByIdAndUpdate(productId,req.body,{new: true},(err, product)=>{
  //   if(err || !product){
  //       return res.status(400).send({
  //           status: "Fail",
  //           message: err.stack
  //       })
  //   }

  //   return res.status(200).send({
  //       status: "Success",
  //       product
  //   })
  // })
};

export const deleteProducts = async (req, res) => {
    const {productId} = req.params

    try {
      let productDelete = await Product.findByIdAndDelete(productId)
      res.status(200).send({
        status: "Success",
        productDelete
      })
      
    } catch (error) {
      res.status(400).send({
        status: "Fail",
        message: error.stack
      })
    }

    // Product.findByIdAndDelete(productId, (err, productRemove)=>{
    //     if(err || !productRemove){
    //         res.status(400).send({
    //             status: "fail",
    //             message: err
    //         })
    //     }

    //     return res.status(200).send({
    //         status: "Success",
    //         product: productRemove
    //     })
    // })
};
