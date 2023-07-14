const validateProduct = (req,res,next)=>{
    if(
        !req.body.name ||
        !req.body.description ||
        !req.body.price ||
        !req.body.images ||
        !req.body.category 
    ) {
        //if any of the body params is missing we come here
        return res.status(400).json({
            data:{},
            success :false,
            message: "invalid req body for create product",
            err: "missing mandatory properties for create product"
        })
    }

    next();
}

module.exports = {
    validateProduct
}