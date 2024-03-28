const express = require('express');
const router = express.Router();

const {getProducts, creatProduct, getProductById, updateProduct, deletePorduct} = require("../Controllers/factureController")

router.get("/products", getProducts)
router.get("/products/:id", getProductById)
router.post("/products", creatProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deletePorduct)
module.exports = router;