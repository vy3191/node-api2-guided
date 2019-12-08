const express = require("express");
const hubs = require("../hubs/hubs-model");

const router = express.Router();

router.get("/", (req,res) =>{
  // hubs.findHubMessages(hubId)
    res.end("working now");
})

module.exports = router;
