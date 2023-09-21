const List = require("../models/schema")

const control = {

    async post(req, res) {
        try {
            const data =await new List(req.body);
            data.save();
            console.log(data);
            res.send("Inserted");
        } catch (error) {
            console.log(error);
            res.send(error)
        }

    },
    async put(req, res) {
        try {
            const data=await List.findByIdAndUpdate(req.params.id,req.body);
            if (!data) {
                res.send("No Contacts by this id")
                console.log("Not Found");
            }
            else{
                res.send(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async deleteOne(req, res) {
        try {
            const data=await List.deleteOne({_id:req.params.id})
            if (!data) {
                res.send("No Contacts by this id")
                console.log("Not Found");
            }
            else{
                res.send(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async deleteAll(req, res) {
        try {
            const data=await List.deleteMany({});
            if (!data) {
                res.send("No Contacts by this id")
                console.log("Not Found");
            }
            else{
                res.send(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getOne(req, res) {
        try {
            const data=await List.findOne({_id:req.params.id})
            if (!data) {
                res.send("No Contacts by this id")
                console.log("Not Found");
            }
            else{
                res.send(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getAll(req, res) {
        try {
            const data=await List.find()
            if (!data) {
                res.send("No Contacts")
            }
            else{
                res.send(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = control;