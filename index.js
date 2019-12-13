const express = require("express");
const hubRouter = require("./routers/hub");
const welcomRouter = require("./routers/welcome");



const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 4000;


const server = express();

server.use(express.json());
server.get("/", (req,res) => {
    res.status(200).json({
       Msg:"Successful",
       CONTENT:process.env.CONTENT,
       SECRET_KEY: process.env.SECRET_KEY
    })
})
server.use("/api/", welcomRouter);
server.use("/api/hubs", hubRouter);



// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(PORT, HOST, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n")
})
