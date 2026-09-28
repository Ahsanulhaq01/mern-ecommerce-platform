import express from "express";
import cors from 'cors';
import userRouter from './../src/router/userRouter.js'


const app = express();


app.use(express.json());
app.use(cors({
    origin : "*",
    Credential : true,
}));

app.use('public/upload' , express.static('public/upload'));

app.use('/api/v1/users' , userRouter);



export {app}




