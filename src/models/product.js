const mongoose  =  require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide product name"],
        trim: true
    },
    description:{
        type: String,
        required: [true, "Please provide product description"],
    },
    price: {
        type : Number,
        required: [true, "Please provide product pricing"],
        maxLength: [8, "Price cannot exceed 8 digits"]
    },
    ratings : {
        type: Number,
        default: 0
    },
    images:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category : {
        type: String,
        required: [true, "Please provide product category"]
    },
    stock: {
        type: Number,
        required:  [true, "Please provide product stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default : 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product =  mongoose.model("Product",productSchema);
module.exports = Product;