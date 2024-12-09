const express = require("express");
const { getProducts } = require("../controllers/ProductController");

const router = express.Router();
router.get("/products", getProducts);

module.exports = router;