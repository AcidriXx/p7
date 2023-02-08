const Product = require('../models/Product');


exports.getAllProducts = (req, res,) => {
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
