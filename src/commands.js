const {program} = require("commander");
const { prompt} = require("inquirer");
const {listDevelopers, removeDeveloper, updateDeveloper, insertDeveloper, findDeveloper} =require("./controllers/developerControllers")

program.version("1.0.0").description("Command line tool for managing the developers of the MWC");
const developerQuestions=    [
    {
        type: "input",
        message: "Put the name",
        name:"name"
    },
     {
        type: "input",
        message: "Put the email",
        name:"email"
    },
    {
        type:"list",
        name:"category",
        choices:[
            "Front","Back","Mobile", "Data",
        ]
    },
    {
        type:"input",
        message:"Put your phone",
        name:"phone"
    },
    {
        type:"list",
        name:"date",
        choices:[
            "Feb 28, 2021","Mar 1, 2021","Mar 2, 2021", "Mar 3, 2021",
        ]
    }

];
program.command("add").
alias("a")
.description("Add a new developer to the database")
.action( async ()=>{
    const answers= await prompt(developerQuestions)
    insertDeveloper(answers);
})

//! Here is the commands. You can List, Add, Delete, Update and Find the developers


// List the list of the developers in JSON FILE 
program
.command("list")
.alias("l")
.description("Show the list of the developers that are going to assist at the MWC")
.action(()=> listDevelopers())

// Delete the developer passing the _id

program
.command("delete <id>")
.alias("d")
.description("Delete the developer selected (You have to pass the _id of the developer) ")
.action((_id)=> removeDeveloper(_id)
)

//Update the developer 

program
.command("update <id>")
.alias("u")
.description("Update the information of the developer")
.action( async (_id)=>{
    if (!_id) return console.log("please provide id")
    const answers = await prompt(developerQuestions)
    await updateDeveloper(_id, answers)
}
)


//Show the description of the days that the MWC are going to be

program
.command("MWC-days")
.description("Show the days that the MWC are going to be")
.alias("MWC")
.action(()=>{
    console.log("The event of the MWC are going to be between these days:\n Feb 28, 2021 \n Mar 1, 2021 \n Mar 2, 2021 \n Mar 3, 2021")
    process.exit(0);
})


//Find the developers via Name/Email/Category

program
.command("find <devUser>")
.alias("f")
.description("You can find any user or show only the category (You can put his Name/Email/Category)")
.action((devUser)=> findDeveloper(devUser))


program.parse(process.argv);