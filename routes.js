const { signUp, login, getUser, updatePassword, deleteUser } = require("./controller")

const router = require("express").Router()


router.post("/signup",signUp)
router.post("/login",login)
router.get("/getUser",getUser)
router.put("/update/password",updatePassword)
router.delete("/delete/user",deleteUser)

module.exports = router