const userModel = require("./userModel")

exports.signUp = async(req,res) => {
    const {name,email,password} = req.body
    const checkUser = await userModel.findOne({email})
    if(!checkUser) {
        const user = await userModel.create({
            name,email,password
        })
       return res.send(user)
    }
    res.send("User already exists. Please login.")

}
exports.login = async(req,res) => {
    const {email,password} = req.body
    const user = await userModel.findOne({
        email
    })
    console.log(user)
    if(user) {
        if(user.password === password) {
            return res.send("user login successfully.")
        }
    } 

        return res.send("User not found!")
     
}
exports.getUser = async(req,res) => {
    const {email} = req.body
    const user = await userModel.findOne({email})
    if(user) {
        user.password = ""
        return res.send(user)
    }
    return res.send("user does not exist.")
}

exports.updatePassword = async(req,res) => {
    const {email,newPassword} = req.body
    const user = await userModel.findOne({email})
    if(user) {
user.password = newPassword
const updatedUser = await user.save()
return res.send(updatedUser)
    }

    return res.send("User is not authorized.")
    
}

exports.deleteUser = async(req,res) => {
    const {email} = req.body
    const user = await userModel.deleteOne({email})

    return res.send(user)
}