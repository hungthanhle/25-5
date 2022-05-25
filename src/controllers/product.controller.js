const { productService } = require('../services');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const getProducts = catchAsync(async (req,res)=>{
    const results = await productService.getProducts();
    res.status(201).json(results);
});
const getProductById = catchAsync(async (req,res)=>{
    const id = req.params.id;
    // ApiError: User not found nữa không ? <- cái mẫu thiếu ở service
    const results = await productService.getProductById(id);
    res.status(201).json(results);
});
const addProductById = catchAsync(async (req,res)=>{
    const id = req.params.id;
    const results = await productService.addProductById(id);
    res.status(201).json('Them thanh cong');
});
const deleteProductById = catchAsync(async (req,res)=>{
    const id = req.params.id;
    const results = await productService.deleteProductById(id);
    res.status(201).json('Xoa thanh cong');
});
const updateProductById = catchAsync(async (req,res)=>{
    const id = req.params.id;
    const results = await productService.updateProductById(id);
    res.status(201).json('Update thanh cong');
});
module.exports = {
    getProducts,
    getProductById,
    addProductById,
    deleteProductById,
    updateProductById,
}