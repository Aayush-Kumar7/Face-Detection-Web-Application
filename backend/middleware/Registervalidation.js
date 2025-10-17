const Joi = require("joi");

const Registervalidation = (req,res,next)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(100).required(),
        
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(401).json({message : "Bad request",error})
    }
    next();
}

module.exports = {Registervalidation}