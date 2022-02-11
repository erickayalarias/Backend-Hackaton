require("dotenv").config()

module.exports={
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://Erick:Hackaton2022@cluster0.3xi5g.mongodb.net/hackaton2022?retryWrites=true&w=majority"
}