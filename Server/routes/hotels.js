import express  from "express";

const router =express.Router(); 

router.get('/', (req, res) =>{
    res.send("Hotels Endpoints")
})

export default router;