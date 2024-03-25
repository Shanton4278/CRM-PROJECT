const userDatabase = require('./database')

class user_db {
  constructor(){
    global.db = userDatabase
  }

  // =============== ENROLL USER ===========

  enroll_user(first_name, last_name, phone, username, email, staff_id, status, role, callback){
    const d = new Date()
    const date = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear()
    const time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    
    let query = "INSERT INTO user (first_name, last_name, phone, username, email, staff_id, status, role, date, time) VALUES (?,?,?,?,?,?,?,?,?,?)"
    console.log()
    try{
      db.query(query, [first_name, last_name, phone, username, email, staff_id, status, role, date, time], (error, res)=>{
        if(error){
          console.log(error);
          return callback({
            status: false,
            message: "System error"
            
          })
        }else{
          return callback({
            status: true, 
            message: "User created successfully"
          })
        }
      })
    }catch(error){
      return callback({
        status: false,
        message: "Unable to create user"
      })
    }
  }

  

}
module.exports =  user_db

