const AuthService = require('../services/auth.service.js');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const Token = require('../services/token.service.js');
const config = require('../config/config.js')

const AuthLog1st = catchAsync(async (req,res)=>{
    let { username,password } = req.body;
    const user = await AuthService.AuthByUsernamePassword(username,password);
    const token = await Token.generateToken(user.username,user.id);
    res.cookie('token',token, { expires: new Date(Date.now() + parseInt(config.jwt.accessExpirationMinutes)*60000)});
    res.status(201).json({message:'Dang nhap thanh cong',token:token});
});
const AuthLog2nd = catchAsync(async (req,res,next)=>{
    const token = req.cookies.token;
    const payload = await Token.generatePayload(token);
    const results = await AuthService.AuthByUsernameUserId(payload.username,payload.id);
    if(results){
        next();
    }
})
module.exports = {
    AuthLog1st,
    AuthLog2nd,
}