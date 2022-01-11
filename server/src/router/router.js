const express = require("express");
const router = express.Router();
const API = require("../schema/schema");

router.get("/notes", async (req, res)=>{

    try{
        const alldata = await API.find();
        res.status(200).send(alldata);
    }
    catch(e){
        res.status(400).send(e);
    }
});



router.get("/notes/:topic", async (req, res)=>{
    try{
        const topic = req.params.topic;
        const topicdata = await API.find({topic});
        if(!topicdata)
        {
            res.status(404).send();
        }
        res.send(topicdata);
    }
    catch(e){
        res.status(400).send(e);
    }
});


router.get("/notes/api/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const topicdata = await API.findById(id);
        if(!topicdata)
        {
            res.status(404).send();
        }
        res.send(topicdata);
    }
    catch(e){
        res.status(400).send(e);
    }
});



router.post("/add",  async (req, res)=>{
    try{
        const data = new API(req.body);
        const newadd = await data.save();
        res.status(201).send(newadd);
    }
    catch(e){
        // console.log(e);
        res.status(400).send(e);
    }
});


router.delete("/notes/:id", async (req, res)=>{
    try{
        const deleteNote = await API.findByIdAndDelete(req.params.id);
        if(!deleteNote)
        {
            res.status(400).send();
        }
        res.send(200).send(deleteNote);
    }
    catch(e){
        res.status(400).send(e);
    }
});


router.patch("/notes/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const updatenotes = await API.findByIdAndUpdate(id, req.body, {new :  true});
        res.status(200).send(updatenotes);
    }
    catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;