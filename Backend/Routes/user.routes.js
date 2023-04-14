const express = require('express')
const passport = require("passport");
require("../utils/passport/jwt")(passport)
const router = express.Router()
const UserFunctions=require("../Controllers/user.controller")
const auth=require("../Middlewares/token")
router.get("/",auth,UserFunctions.show)
router.get("/:id",auth,UserFunctions.showByID)
router.patch("/:id",auth,UserFunctions.update)
router.delete("/:id",auth,UserFunctions.delete)


module.exports=router