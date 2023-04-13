const brcypt = require('bcrypt');
const UserInfo = require("../model/UserInfo")

const userController =async(req,res) =>{
    
    try{
        
        const {name,mobileNo,email,password} = req.body;
        // console.log("Request body:", req.body);
        const salt = await brcypt.genSalt(10);
        let encryptPassword = await brcypt.hash(password,salt);

        const newUser = UserInfo({
            name,
            mobileNo,
            email,
            password : encryptPassword,
        })
        // console.log("New user:", newUser);

        newUser.save((error, user) => {
        if (error) {
            res.send(error);
            console.log('Error saving data:', error);
            // console.log('Error saving data')
            // console.log("Error saving user:", error);
            // res.status(500).json({ error: "User already exists" });
        } else {
            console.log("User saved:", user);
            res.status(200).send({ name: user.name });
        }
        });
    } catch (error) {
        console.log("Error in userSignUp:", error);
        res.status(500).json({ error: "Error in userSignUp" });
    }
}


module.exports = userController;
