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


        const mailOptions_ForStudent={
          from:process.env.email,
          to:req.body.email,
          cc:'',
          bcc:'',
          subject: 'Codify College',
          text: 'From '+req.body.name+
              ':'+req.body.email+': \n\n messsage :"'
              +req.body.tel+'"',
          html:'<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="style.css"></head><style>p{margin: auto;} a{ text-decoration: underline; color: rgb(49, 150, 190); }</style><body> <div> <p> Hi '+req.body.name+', <br><br> Congratulations on taking a first strong step towards becoming a Full Stack Web Developer. <br> In 16-30 weeks, we\'ll teach you the essentials to start working as a Full Stack developer. <br> The Bootcamp price 👉 <strong style="color: red; font: bold;"> 30% reduced course price until 15/02!</strong> 👈 </p> <br> <p>✅👉<a href="https://meetings.hubspot.com/sl-melad" target="_blank"> Book a Free Phone Call </a>👈</p><br> <p>Web Development Courses Part-time studying :</p><br> <p>✅ Full-stack: 30 weeks👉 <a href="https://www.canva.com/design/DAEPtgJ4o4k/cdX04eEqW1Hq1pIlxzW5yA/view?utm_content=DAEPtgJ4o4k&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&fbclid=IwAR0R9h32zm30NEg-fLhWR8LYAPwAYONa86s6f3n_Ait4Q-4isJpIvAskIXw#1" target="_blank">Full-stack course read</a> 👈</p> <p>✅ Frontend: 16 weeks👉 <a href="https://www.canva.com/design/DAEMBCl7Zb0/b0xs2VfFH0pzwrGaT-VlRQ/view?utm_content=DAEMBCl7Zb0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">Front-end course read</a> 👈</p> <p>✅Bootcamp with 5 days a week: 2-4Hours a Day contains 1 mentoring sessions, </p><br><br> <p style="text-decoration: underline;"><strong>course start</strong> <br> <strong>📆March 2021</strong></p> <br><br> <p><strong>Application period:</strong><br>The deadline to submit the application is the <strong>15th of February </strong><br>We are super excited to welcome you onboard our Bootcamp and our vibrant community. <br><br> 👉<strong style="color: red;">Payment plan from 6 to 36 months </strong>👈</p> <br> <a href="mailto:info@codifycollege.se" target="_blank" style="text-decoration: none;">info@codifycollege.se</a> <br><br> <p>Tel: <a href="tel:+46723338723" style="text-decoration: none;">+46 723338723 </a></p><br> <p>Visit us at: <a href="www.codifycollege.se">www.codifycollege.se</a></p> <br><br> <p><a href="https://www.linkedin.com/company/codify-college/">LinkedIn</a> ,<a href="https://www.facebook.com/codifyCollege">Facebook</a> ,<a href="https://www.youtube.com/channel/UCXi6GEt0yD0ZXmlrnHgKfPA/featured">YouTube</a> ,<a href="https://www.instagram.com/codify.college/">Instagram</a></p> <br><br> <p>We look forward to speaking with you very soon. <br> Our postal address is Röntgenvägen 1, 141 52 Huddinge, Sweden</p> <br><br> <p style="color: gray;">Cheers, <br> Codify College AB</p> </div></body></html>'
              
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
  
    })

      // send email back to the student
      transporter.sendMail(mailOptions_ForStudent,(err , info)=>{
        if ( err) return res.status(500).json({ success: false , msg:'NodeMailer Error : ' + err })
          
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
