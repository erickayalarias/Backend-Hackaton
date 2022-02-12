const {program} = require("commander");
const {prompt} = require("inquirer");
const {listDevelopers, removeDeveloper, updateDeveloper, insertDeveloper, findDeveloper} =require("../controllers/developerControllers")
const {Questions} = require("./questions")


program
.version("Hackaton 1.0")
.description("Command line for managing the developers, you can see the help section that will describe the commands and how work with them. \n Examples of commands \n ADD DEVELOPER: mwc add \n LIST TABLE: mwc list \n UPDATE DEVELOPER: mwc update 620557a04d8f47f99edc3fe2 \n DELETE DEVELOPER: mwc delete \n EVENT DAYS: mwc event \n FIND BY CATEGORY OR DATE: mwc find Front");



//! Here is the commands. You can List, Add, Delete, Update and Find by Category or Date


// Add a new developer at the database

program
.command("add").
alias("a")
.description("Add a new developer to the database")
.action( async ()=>{
    const answers= await prompt(Questions())
    insertDeveloper(answers);
})



// List the list of the developers in mongoDB

program
.command("list")
.alias("l")
.description("Show the list of the developers that are going to assist at the MWC")
.action(()=> listDevelopers())


// Delete the developer

program
.command("delete")
.alias("d")
.description("Delete the developer selected ")
.action(async ()=> {
    const dev = await prompt({
            type: "input",
            message: "Pass the _id to delete the Developer (If ctrl-v doesnt work try ctrl-alt-v or right click): ",
            name:"id" 
    })
    removeDeveloper(dev.id)
})


//Update the developer passing the _id.   Example: mwc update620557a04d8f47f99edc3fe2

program
.command("update <id>")
.alias("u")
.description("Update the information of the developer (You have to pass the _id in order to update)")
.action( async (_id)=>{
    if (!_id) return console.log("Provide _id")
    const answers = await prompt(Questions())
    await updateDeveloper(_id, answers)
}
)


//Show the description of the days that the MWC are going to be


program
.command("event")
.description("Show the days that the MWC are going to be")
.alias("e")
.action(()=>{
    console.log("The mwc is going to be between:")
    console.log("Feb 28, 2021")
    console.log("Mar 1, 2021")
    console.log("Mar 2, 2021")
    process.exit(0);
})


//Find the developers 


program
.command("find <devUser>")
.alias("f")
.description("You can find the developers in a certain category or a date)")
.action((devUser)=>{
    if (!devUser) return console.log("Provide _id")
    findDeveloper(devUser)

})


program.parse(process.argv);