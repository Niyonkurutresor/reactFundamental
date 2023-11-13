 const validate = (schema) => {
    return(req,res,next) =>{
        const {error} = schema.validate(req.body);
        if(error){
            return res.status(400).json({
                message:"Please fill all fields ",
                error:error
            });
        }
        next();
        
    }
}

module.exports = {validate};
