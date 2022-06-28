import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";

import Connection  from "./database/db.js";
// App Config

const app=express();
const PORT=process.env.PORT || 8000;
dotenv.config();


// Middlewares
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;





// DB config


// API Endpoints
app.get("/",(req,res)=>{
    res.status(200).send("hello");
})

app.post("/tinder/card",(req,res)=>{
    const dbCard=req.body;
})


Connection(username,password);

// Listener
app.listen(PORT,()=>{
    console.log(`server connected successfully on PORT ${PORT}`);
})