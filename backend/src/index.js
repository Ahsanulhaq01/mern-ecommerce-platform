import dotenv from 'dotenv'
import { app } from './app.js'
import {connectDB} from './../src/db/index.js'

dotenv.config();

connectDB().then(()=>{
    app.on('error' , ()=>{
        console.log(`Getting error while Connecting to DB`)
    })

    app.listen(process.env.PORT , ()=>{
        console.log(`server is listening on port ${process.env.PORT
        }`)
    })
}).catch((error)=>{
    console.log(`DB connection get Failed ${error}`)
})