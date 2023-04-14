const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken=require("../utils/generateToken")
const RoleEnums=require("../utils/Enums/RoleEnums")
const saltRounds = 10;
exports.register = async (req, res) => {
  try {
    const input = req.body;
    const check=await User.find({email:input.email})
    if(check.length>0){
      res.status(400).json({ error: "Register using another email" });
    }
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(input.password, salt, async function (err, hash) {
        // Store hash in your password DB.
 
        const dataToSave={
          name: input.name,
          email:input.email,
          password:hash,
          company:input.company,
          role:RoleEnums.USER
        }
        const data = await User.create(dataToSave);
        res.json({ data: data });
      });
    });
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};

exports.login = async (req, res) => {
  try {
    const input = req.body;
    const exists = await User.findOne({ email: input.email });
    if (!exists) {
      res.status(400).json({ data: "User Doesn't Exists" });
    } else {
      bcrypt.compare(input.password, exists.password, function (err, result) {
        const payload = {
          _id: exists.id,
          name: exists.name,
          email: exists.email,
          company: exists.company,
        };
        const token =generateToken(payload)
        const data = {name:exists.name,company: exists.company, email: exists.email, token: token };
        res.json({ data: data });
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
};
