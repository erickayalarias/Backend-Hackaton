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
alias("a").action( async ()=>{
    const answers= await prompt(developerQuestions)
    insertDeveloper(answers);
})

//listar tareas
// Aqui podeis cambiar el command y alias
program.command("list").alias("l").action(()=> listDevelopers())
program.command("delete <id>").alias("d").action((_id)=> removeDeveloper(_id)
)
program.command("update <id>").alias("u").action( async (_id)=>{
    if (!_id) return console.log("please provide id")
   const answers = await prompt(developerQuestions)
//    console.log(answers)
   await updateDeveloper(_id, answers)
}
)
program.command("MWC-days").alias("MWC").action(()=>{
    console.log("The event of the MWC are going to be between these days:\n Feb 28, 2021 \n Mar 1, 2021 \n Mar 2, 2021 \n Mar 3, 2021")
    process.exit(0);
})

program.command("find <devUser>").alias("f").action((devUser)=> findDeveloper(devUser))


program.parse(process.argv);