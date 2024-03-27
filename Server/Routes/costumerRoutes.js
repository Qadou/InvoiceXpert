const express = require('express');
const router =express.Router();
const {login, createCostumer,getAllCostumer,search,update,deleteCostumer} = require('../Controller/costumerController')


router.post('/costumer',createCostumer);
router.get('/costumer',getAllCostumer);
router.get("/costumer/:name", search);
router.put("/costumer/:name", update);
router.post('/costumer/login',login);
router.delete("/costumer/:name", deleteCostumer);
module.exports = router;