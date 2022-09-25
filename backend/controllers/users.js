import User from '../models/UserModel.js'
import express from 'express'
const router= express.Router()

router.route('/').get((req,res)=>{
     User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+err))
})


router.route('/add').post((req,res)=>{
    const username= req.body.username
    const newUser=new User({username})
    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err))
        
})


export default router 