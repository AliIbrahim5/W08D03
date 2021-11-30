const rolemodel =require("../../db/models/role");

const authorization = async(req, res, next) =>{
    try {
        const roleId = req.token.role;
        const result = await rolemodel.findById(roleId);
        console.log();
        if(result.role == "admin"){
            next();
        }else{
            res.status(403).json("forbidden")
        }
        
    } catch (error) {

        res.status(403).json(error)
    }
}

module.exports = authorization;