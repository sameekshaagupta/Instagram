import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

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
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOption))

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`)
})