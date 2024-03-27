const express = require('express');
const router = express.Router();

const {getCategory, creatCategory, getCategoryById, updateCategory, deletePorduct} = require("../Controllers/PostController")

router.get("/category", getCategory)
router.get("/category/:id", getCategoryById)
router.post("/category", creatCategory)
router.put("/category/:id", updateCategory)
router.delete("/category/:id", deletePorduct)
module.exports = router;