import  Exercise from '../models/ExerciseModel.js'
import express from 'express'
const router= express.Router()
router.route('/').get((req, res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch(err=> res.status(400).json('Error: '+ err))
})



router.route('/add').get((req, res)=>{
    const username= req.body.username
    const description= req.body.description
    const duration= Number(req.body.duration)
    const date= Date.parse(req.body.date)
    const newExercise = new Exercise({username, description, duration, date})
    newExercise.save()
    .then(()=>res.json('Exercise'))

    .then(exercises=>res.json(exercises))
    .catch(err=> res.status(400).json('Error: '+ err))
})

export default router 