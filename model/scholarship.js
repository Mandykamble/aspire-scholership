const mongoose = require("mongoose");
const { type } = require("os");

const scholershipSchema = new mongoose.Schema({
    Scholershipid:{
        type:Number,
    },
    scheamname:{
        type:String,
        required :[true,"Please provide your name"]  
    },
    scheamnameDesc:{
        type:String,
        required :[true,"Please provide your scheamname"]  
    },
    scheamType:{
        type:String,
        required :[true,"Please provide your scheamType"]  
    },
    FinancialYear:{
        type:Number,
        // required :[true,"Please provide your Phone FinancialYear"]  
    },
    ScheamFor:{
        type:String,
        // required :[true,"Please provide your ScheamFor"] 
    },
    ScheamAmmount:{
        type:Number,
        // required :[true,"Please provide your ScheamAmmount"] 
    },
    startDate:{
        type:Number,
        // required :[true,"Please provide your endDate"] 
    },
    endDate:{
        type:Number,
        // required :[true,"Please provide your endDate"] 
    },
    EligibilityCriteria:{
        gender:{
            type:String
          },
        familyincome:{
            type:Number
        },
        cast:{
            type:String
        }
        
    },
    AcadamicsDetails:{
        courceLevelName:{
            type:String
          },
        CourceName:{
            type:String
        },
        scoreType:{
            type:String
        },
        score:{
            type:Number
        },
        passingYear:{
            type:String
        },

        
    },

    AdditionalInfo:{
        spocName:{
            type:String
          },
        spocEmail:{
            type:String
        },
        helpDescNo:{
            type:Number
        },
        
        
    }


});
const ScholershipScheam = mongoose.model("scholership",scholershipSchema); 
module.exports = ScholershipScheam