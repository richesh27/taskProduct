const Product = require("../models/product");

class ProductRepository {
    async create(data){
        try{
            const product = await Product.create(data);
            return product;
        }
        catch(err){
            console.log("Something wrong in product repo layer");
            // console.log(err);
            throw err;
        }
    }

    async getProducts (){
        try{
            const products = await Product.find();
            return products;
        }
        catch(err){
            console.log("Something wrong in product repo layer");
            // console.log(err);
            throw err;
        }
    }

    async getSingleProduct(id){
        try{
            const product = await Product.findById(id);
            return product;
        }
        catch(err){
            console.log("Something wrong in product repo layer");
            // console.log(err);
            throw err;
        }
    }

    async updateProduct(id, data){
        try{
            const product = await Product.findByIdAndUpdate(id, data,{
                new:true,
                runValidators:true,
                useFindAndModify:false
            });
            return product;
        }
        catch(err){
            console.log("Something wrong in product repo layer");
            // console.log(err);
            throw err;
        }
    }

    async destroy (id){
        try{
            const product  = await Product.findByIdAndDelete(id);
            return true;
        }
        catch(err){
            console.log("Something wrong in product repo layer");
            // console.log(err);
            throw err;
        }
    }
}

module.exports = ProductRepository;