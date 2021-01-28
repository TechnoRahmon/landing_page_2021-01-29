var express = require('express');
var router = express.Router();
var mailer = require('nodemailer')
const {check,validationResult } = require('express-validator');
const { checkMail} = require('../middleware/mailValidator')
const fs = require('fs');

// check the validatorResualt 
function getValidationResualt(req){
  const error = validationResult(req)
  if(!error.isEmpty())
      return error.array() 
  return false
}
// save data into json file 
  const save_data = (student)=>{

    var data = fs.readFileSync('Students.json');
    var json= JSON.parse(data);
    json.push(student)    
    
        
        fs.writeFileSync('Students.json', JSON.stringify(json,null, 2));
        console.log('data saved !');
  }

  // get date
  const get_date= ()=>{
    let date = new Date(); 
    let day = date.getDate();
    let month = date.getMonth()+1 
    let year = date.getFullYear()
    return  year+'-'+month+'-'+day
      
  }


  //post request 
router.post('/send',checkMail ,(req,res)=>{

    try {

      const error = getValidationResualt(req);
      if ( error) return res.status(400).json({ success:false , msg : error[0].msg });

      const transporter = mailer.createTransport({
        service:'gmail',
        //service is the e-mail service that you want to use
        auth:{
        user:process.env.email,
        //user should be the email id from which you want to send the mail
        pass:process.env.password
        //pass should be the password for the said email id
          }
        
        })

    const mailOptions={
        from:process.env.email,
        to:'technorahmon@gmail.com',
        cc:'',
        bcc:'',
        subject: 'Mail From '+req.body.name,
        text: 'From '+req.body.name+
            ':'+req.body.email+': \n\n messsage :"'
            +req.body.tel+'"',
      html:'<!DOCTYPE html><html><head> <style>table,th,td{border-collapse: collapse;border : 1px solid rgb(31, 31, 31) ;}table{width:50%; text-align:center;}th,td{padding:10px 15px;}</style></head>\
           <body> <h1>Student Information</h1><p>1 Student has been Submitted Successfully</p> \
            <table> \
            <tr> <th> Name </th> <th>Email</th> <th>Phone Number</th><th>Country</th></tr>\
            <tr>  <td>'+ req.body.name +'</td><td>'+ req.body.email +'</td><td>'+ req.body.tel +'</td><td>'+ req.body.country+'</td></tr> \
            </table> <br><br> <hr></body></html>'
            
        }
        

    transporter.sendMail(mailOptions,(err , info)=>{
        if ( err) return res.status(500).json({ success: false , msg:'NodeMailer Error : ' + err })
        
        save_data({
          name:req.body.name,
          email:req.body.email,
          tel:req.body.tel,
          country:req.body.country,
          applied_at:get_date()
        })
        return res.status(200).json({ success: true, info: info.response}) 
    })
    
    
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:'server Error :'+error
    })
  }

  
})
module.exports = router;
