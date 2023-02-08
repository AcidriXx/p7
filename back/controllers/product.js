const Product = require('../models/Product');


exports.getAllProducts = (req, res, next) => {
    Product.find().then(
      (products) => {
        res.status(200).json(products);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


  exports.getOneProduct = (req, res, next) => {
    console.log(req.params.id);
    Product.findById({id: req.params.id})
    .then(
      (product) => {
        res.status(200).json(product);
        console.log(product);
      }
    )
    .catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };