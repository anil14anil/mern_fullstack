import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// for cors origin
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// for json data size
app.use(express.json({limit: "16kb"}))

// for url encoding
app.use(express.urlencoded({
    limit: "16kb",
    extended: true
}))

// for store data in a folder
app.use(express.static("public"))

//for get and set the cookies on user browser
app.use(cookieParser())

export {app};