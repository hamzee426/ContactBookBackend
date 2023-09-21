const mongoose=require("mongoose");

const Contactchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:15,
        minLength:1
    },
    number:{
        type:String,
        required:true,
        minLength:11,
	maxLength:11
    }
})

const ContactModel=mongoose.model("ContactBook",Contactchema);

module.exports=ContactModel;