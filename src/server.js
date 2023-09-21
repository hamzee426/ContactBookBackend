const express=require("express");
require("./dbConn/Conn");
const router=require("./routes/routes")
const app=express();
const PORT=process.env.PORT || 8000


app.use(express.json());
app.use(router);
app.listen(PORT,()=>{
    console.log("Connecting...");
})
