const {connect, connection} = require("mongoose")
const {MONGODB_URI, MONGODB_URI_TEST, NODE_ENV} = require("../config/config")

// Connection checks if the NODE_ENV is test, to change to the testDatabase

const connectDatabase = async ()=>{
    NODE_ENV == "test"
    ? await connect(MONGODB_URI_TEST)
    : await connect(MONGODB_URI)
}
connection.on("error",  err=> console.log(err))


module.exports ={
    connectDatabase,
    connection
}