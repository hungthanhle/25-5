const Product = require('../models/product.model');
// tự động index
const ApiError = require('../utils/ApiError');

const getProducts = async ()=>{
    const results = await Product.findAll();
    return results;
};
const getProductById = async (id)=>{
    const results = await Product.findOne({where:{product_id:id}});
    if(!results){
        throw new ApiError(404,'User not found');
    }
    return results;
};
const deleteProductById = async (id)=>{
    const results = await Product.destroy({
        where: {
          product_id: id
        }
    });
    if(!results){
        throw new ApiError(404,'User not found');
    }
    return results;
};
const addProductById = async (id,updateBody)=>{
    const {product_id,product_name,brand,price} = updateBody;
    if(id==product_id){
        const results = await Product.create(updateBody);
        return results;
    }else{
        throw new ApiError(400,'Bad request');
    }
};
const updateProductById = async (id,updateBody)=>{
    const product = await getProductById(id);;
    if(product){
        const results = await Product.update(updateBody);
        return results;
    }else{
        throw new ApiError(400,'Bad request');
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProductById,
    deleteProductById,
    updateProductById,
}