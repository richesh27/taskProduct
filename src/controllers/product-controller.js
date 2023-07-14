const ProductService = require("../services/product-service");

const productService = new ProductService();


const create = async(req,res)=>{
    try{
        const response = await productService.create(req.body);

        return res.status(201).json({
            success: true,
            message : "Product registered succeffully",
            response
        })

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : err
        })
    }
}


const getProducts = async(req,res)=>{
    try{
        const response = await productService.getproducts();

        return res.status(201).json({
            success: true,
            message : "multiple Products fetched succeffully",
            response
        })

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : err
        })
    }
}


const getSingleProduct = async(req,res)=>{
    try{
        const response = await productService.getSingleproduct(req.params.id);

        return res.status(201).json({
            success: true,
            message : "single product fetched succeffully",
            response
        })

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : err
        })
    }
}

const updateProduct = async(req,res)=>{
    try{
        const response = await productService.updateproduct(req.params.id, req.body);

        return res.status(201).json({
            success: true,
            message : "product updated successfully",
            response
        })

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : err
        })
    }
}


const deleteProduct = async(req,res)=>{
    try{
        await productService.destroy(req.params.id);

        return res.status(201).json({
            success: true,
            message : "Product deleted successfully",
        })

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : err
        })
    }
}

module.exports = {
    create, getSingleProduct, getProducts, updateProduct, deleteProduct
}