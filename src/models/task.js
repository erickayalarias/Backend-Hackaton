const {Schema, model} = require("mongoose");
const taskSchema = new Schema({
    name: {type: String},
    email:{type:String},
    category:{type:String},
    phone:{type:Number},
    date:{type:Date},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model("developers", taskSchema)
