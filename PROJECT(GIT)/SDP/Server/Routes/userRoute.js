const express = require('express');
const router = express.Router();
const Users = require('../Models/user');

router.post('/SignUp', async (req, res) => {  
    try {
        const newuser = new Users(req.body);
        const userdata=await Users.findOne({email:req.body.email})
        if(userdata)
        {
          return res.send({success:false})
        }
        else{
          await newuser.save();
          res.send({success:true})
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//for login user
router.post("/", async(req, res) => {
    //const email1 = req.body.email;
  const password = req.body.password;
    const user = await Users.findOne({username: req.body.username});
    //if user exists
        if (user) {
            if (password === user.password) {
              return res.send({ success: true })
            }
            else {
              return res.status(400).json({ success1: false })
            }
          } else {
            res.status(401).send({message: "Invalid username or Password"});
}});

module.exports = router;