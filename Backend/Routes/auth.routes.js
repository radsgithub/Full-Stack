const express = require('express')
const router = express.Router()
const AuthFunctions=require("../Controllers/auth.controller")

router.post("/register",AuthFunctions.register)
router.post("/login",AuthFunctions.login)


module.exports=router