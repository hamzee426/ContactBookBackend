const express=require("express");
const control=require("../authControl/authControl")
const router=express.Router();

router.post("/",control.post);
router.get("/:id",control.getOne);
router.get("/",control.getAll);
router.put("/:id",control.put);
router.delete("/",control.deleteAll);
router.delete("/:id",control.deleteOne);


module.exports=router;