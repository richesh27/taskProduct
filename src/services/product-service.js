const ProductRepository = require("../repository/product-repo");

class ProductService {
    constructor (){
        this.productRepository = new ProductRepository;
    }

    async create (data){
        try{
            const product = await this.productRepository.create(data);
            return product ;
        }
        catch(err){
            console.log("Something wrong in service layer");
            throw { err};
        }
    }
    
    async getproducts (){
        try{
            const products = await this.productRepository.getProducts();
            return products;
        }
        catch(err){
            console.log("Something wrong in service layer");
            throw { err};
        }
    }
    
    async getSingleproduct (id){
        try{
            const product = await this.productRepository.getSingleProduct(id);
            return product;
        }
        catch(err){
            console.log("Something wrong in service layer");
            throw { err};
        }
    }

    async updateproduct (id, data){
        try{
            const product = await this.productRepository.updateProduct(id, data);
            return product;
        }
        catch(err){
            console.log("Something wrong in service layer");
            throw { err};
        }   
    }

    async destroy(id){
        try{
            const product = await this.productRepository.destroy(id);
            return product;
        }
        catch(err){
            console.log("Something wrong in service layer");
            throw { err};
        } 
    }


}
module.exports = ProductService;