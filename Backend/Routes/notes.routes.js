const express = require('express')
const passport = require("passport");
require("../utils/passport/jwt")(passport)
const router = express.Router()
const NotesFunctions=require("../Controllers/notes.controller")
const auth=require("../Middlewares/token")
router.get("/",auth,NotesFunctions.show)
router.post("/",auth,NotesFunctions.create)
router.get("/:id",auth,NotesFunctions.showByID)
router.patch("/:id",auth,NotesFunctions.update)
router.delete("/:id",auth,NotesFunctions.delete)


module.exports=router