const express = require('express');
const router = express.Router();

const {getCategory, creatCategory, getCategoryById, updateCategory, deletePorduct, deleteCategory} = require("../Controllers/CategoryController")

router.get("/category", getCategory)
router.get("/category/:id", getCategoryById)
router.post("/category", creatCategory)
router.put("/category/:id", updateCategory)
router.delete("/category/:id", deleteCategory)
module.exports = router;