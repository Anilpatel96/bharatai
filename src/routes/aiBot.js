const express = require("express");
const {OpenAiChat}=require("../controllers/aiBotController");
const {addAiPrompt,updateAiPrompt,deleteAiPrompt,getAllAiPrompt}=require("../controllers/aiPromptController");
const myAuth=require("../middlewares/auth");
const aiRouter=express.Router();
const dotenv = require('dotenv');

dotenv.config();

/***********Version Control vr1 ******************** */

aiRouter.post("/"+process.env.PATH_KEY,myAuth,OpenAiChat);

///ai prompt operations
aiRouter.post("/prompts",myAuth,addAiPrompt);
aiRouter.put("/prompts",myAuth,updateAiPrompt);
aiRouter.delete("/prompts",myAuth,deleteAiPrompt);
aiRouter.get("/prompts",myAuth,getAllAiPrompt);

module.exports=aiRouter;