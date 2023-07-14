const express = require("express");
const productapiRoutes = require('./v1/routes');


const router = express.Router();

router.use("/v1", productapiRoutes);

module.exports = router;