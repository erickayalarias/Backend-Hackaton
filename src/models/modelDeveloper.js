const {Schema, model} = require("mongoose");



const devSchema = new Schema({
    name: {type: String},
    email:{type:String},
    category:{type:String},
    phone:{type:String},
    date:{type:String},
},{
    versionKey:false
})



module.exports = model("mwc-assistants", devSchema)
