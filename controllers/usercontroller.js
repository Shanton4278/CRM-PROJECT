const express = require('express')
const router = express.Router()
const userDB = require("../models/usermodel")
const userdata = new userDB

// ================== ENROLL USER ================

router.post('/enrollUser', (req, res)=>{
  const body = req.body

  userdata.enroll_user(body.first_name, body.last_name, body.phone, body.username, body.email, body.staff_id, body.status, body.role, (response)=>{
    if(response.status === true){
      res.status(200).json({
        status: true,
        message: response.message
      })
    }else{
      res.status(404).json({
        status: false,
        message: response.message
        
      })
    }
  })
})


// ========================== DELETE USER ======================

router.delete('/deleteUser', (req, res) => {
  const body = req.body

  userdata.delete_user(body.first_name, body.last_name, body.phone, body.username, body.staff_id, body.status, body.role, (response) => {
    if(response.status === true){
      res.status(200).json({
        status: true,
        message: response.message 
      })
    }else{
      res.status(404).json({
        status: false,
        message: response.message
      })
    }
  })
})

// ========================= GET USER ========================

router.get('/getUser', (req, res) => {
  const body = req.body

  userdata.get_user(body.full_name, body.email, body.phone, body.status, body.role, (response) => {
    if(response.status === true){
      res.status(200).json({
        status: true,
        message: response.message
      })
    }else{
      res.status(404).json({
        status: false,
        message: response.message
      })
    }
  })
})

// =====================  GET LIST OF ALL USERS ====================

router.get('/getAllUsers', (req, res) =>{
  const body = req.body
  
  userdata.all_users(body.full_name, body.email, body.phone, body.status, body.role, (response) =>{
    if(response.status === true){
      res.status(200).json({
        status: true,
        message: response.message
      })
    }else{
      res.status(404).json({
        status: false,
        message: response.message
      }) 
    }
  })
})

module.exports = router