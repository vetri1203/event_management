import express from "express";
// import { express } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import {port,url} from './Port.js';
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url).then(() => console.log("db connected")) 
    .catch((err)=>console.log("error in ",err.message));

app.listen(port,()=>{
    console.log(`app running in port of ${port}`);
})


