const AuthModel = require('../models/auth.model.js');
// tự động index
const ApiError = require('../utils/ApiError');

const AuthByUsernamePassword = async (username,password)=>{
    const results = await AuthModel.findOne({where:{username:username,password:password}});
    if(!results){
        throw new ApiError(404,'Invalid usernam or password');
    }
    return results;
};
const AuthByUsernameUserId = async (username,id)=>{
    const results = await AuthModel.findOne({where:{username:username,id:id}});
    if(!results){
        throw new ApiError(401,'Unauthorized');
    }
    return results;
};
module.exports = {
    AuthByUsernamePassword,
    AuthByUsernameUserId,
}