const express = require("express");
const hubs = require("../hubs/hubs-model");

const router = express.Router({mergeParams:true});

router.get("/", (req,res) =>{
  hubs.findHubMessages(req.params.id)
      .then(data => {
        
        res.json(data)
      })
      .catch(err => {
        res.status(500).json({message:`I could not get the message for ${req.params.id}`})
      })
   
});

router.get("/:messageId", (req,res) => {
  hubs.findHubMessageById(req.params.id, req.params.messageId)
      .then(data => {
        if(!data) res.status(404).json({error:'Message is not found'});
        res.json(data);
      })
      .catch(err => res.status(500).json({message:`Could not find the specifin message`}))
});

router.post("/", (req,res) => {
   if(!req.body.text || !req.body.sender) res.status(400).json({message:'Need sender and text values'});
   const body = {
      sender:req.body.sender,
      text:req.body.text
   }
   hubs.addHubMessage(req.params.id, body)
       .then(data => {
          res.status(201).json(data);
       })
       .catch(err => {
          res.status(500).json({msg:"cound not create a hub message"});
       })
})

module.exports = router;
