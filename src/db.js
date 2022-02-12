const {connect, connection} = require("mongoose")
const {MONGODB_URI, MONGODB_URI_TEST, NODE_ENV} = require("./config")



const connectDB = async ()=>{
    NODE_ENV == "test"
    ? await connect(MONGODB_URI_TEST)
    : await connect(MONGODB_URI)
}
connection.on("error",  err=> console.log(err))
module.exports ={
    connectDB,
    connection
}