import dotenv from 'dotenv';
import express from 'express';

import connectDB from './db/index.js';
import e from 'express';

const app = express();
dotenv.config({
    path: './env'
})
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`); 
    })
}).catch((err)=>{
    console.log("MongoDb commection failed !! ",err);
})

/*
import express from 'express';

const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error ", (error) => {
            console.log("ERROR Express :", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listing on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw(error)
    }
})()
*/