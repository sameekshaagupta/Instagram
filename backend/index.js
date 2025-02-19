import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'

dotenv.config({})
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    return res.status(200).json({
        message:"Im coming from backend",
        success: true
    })
})
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))
const corsOption = {
    //frontend origin
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOption))


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`)
})