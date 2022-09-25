import express, { json } from 'express'
import cors from 'cors'
import mangoose from 'mongoose'
import dotenv from 'dotenv'
import exercisesRouter from './controllers/exercises.js'
import usersRouter from './controllers/users.js'

const ATLAS_URI='mongodb+srv://picasso:Jg53brr36*-i!CR@cluster0.j1ukq7b.mongodb.net/?retryWrites=true&w=majority'
const app= express()
const port= process.env.PORT || 5000

app.use(cors())
app.use(json())
app.use('/exercises',exercisesRouter)
app.use('/users',usersRouter)

const uri=ATLAS_URI 
mangoose.connect(uri, {useNewUrlParser:true})
const connection= mangoose.connection
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully")
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})










