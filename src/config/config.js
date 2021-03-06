require("dotenv").config()

// Config for the URL, the url comes from .env but if it doesn't exist choose the Url passed. Read in Readme.

module.exports={
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://Erick:Hackaton2022@cluster0.3xi5g.mongodb.net/hackaton2022?retryWrites=true&w=majority",
    MONGODB_URI_TEST: process.env.MONGODB_URI_TEST || "mongodb+srv://Erick:Hackaton2022@cluster0.3xi5g.mongodb.net/testHackaton?retryWrites=true&w=majority",
    NODE_ENV:process.env.NODE_ENV
}