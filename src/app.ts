import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Tdrouter from "./routes/todoRoute"

dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URL!, ()=>{
    console.log("MONGO DB CONNECTED")
})


app.use(logger('dev'))
app.use(express.json())
app.use('/', Tdrouter)

app.listen(3030,()=>{
    console.log("great app listening at port 3030")
} )