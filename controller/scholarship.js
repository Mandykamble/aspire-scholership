
const jwt = require("jsonwebtoken");

const Scholarship= require("../model/scholarship.js");

const cookieParser = require("cookie-parser");
// Body-parser middleware
let num=1;

exports.postScholarship = async(req,res,next)=>{
    // console.log(req.body)

    try {
        
        const newScholarship= new Scholarship(req.body);
        newScholarship.Scholershipid = num;
        num = num ++;
        // const user = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN);   
        // if(
            //     !newScholarship.scheamname ||
    //     !newScholarship.scheamnameDesc ||
    //     !newScholarship.scheamType ||
    //     !newScholarship.FinancialYear ||
    //     !newScholarship.ScheamFor ||
    //     !newScholarship.ScheamAmmount ||
    //     !newScholarship.startDate || 
    //     !newScholarship.endDate
    // ){
        
        //     throw new AppError(300,"input field not provided",404)

        // }
        
        // console.log(newEmployer);
        await newScholarship.save();
        
        res.status(200).json(newScholarship)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
        

    
  
   
    

    // res.render("employerprofile")
    // res.redirect('/employerprofile')
}


exports.getAllScholarship = async(req,res,next)=>{
    

    // const employeer = jwt.verify(req.cookies.access_token,process.env.ACCESS_TOKEN)
    // const data1 = employeer.newUser[0].name;
    try {
        
        const scholarships = await Scholarship.find(); 
        // res.render("employerpost")
        
        res.status(200).json(scholarships)
    } catch (error) {
        
        res.status(500).json(error)
    }
}


















