const express = require('express');
const router =express.Router();
const {login, createUser,getAllUser,search,update,deleteUser} = require('../Controller/userController')


router.post('/user',createUser);
router.get('/user',getAllUser);
router.get("/user/:name", search);
router.put("/user/:name", update);
router.post('/login',login);
router.delete("/user/:name", deleteUser);
module.exports = router;