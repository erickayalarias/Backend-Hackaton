const {program} = require("commander");
const { prompt} = require("inquirer");
const {addTask, listTasks, removeTask, updateTasks} =require("./controllers/task.controllers")

program.version("1.0.0").description("Command line tool for managing tasks  ");
const taskQuestions=    [
    {
        type: "input",
        message: "Task title",
        name:"title"
    },
     {
        type: "input",
        message: "Task title",
        name:"description"
    }
];
program.command("save").
alias("s").action( async ()=>{
    console.log("Saving information");
    const answers= await prompt(taskQuestions)
    // addTask(answers);
})

//listar tareas

program.command("list").alias("l").action(()=> listTasks())
program.command("delete <id>").alias("d").action((_id)=> removeTask(_id)
)
program.command("update <id>").alias("u").action( async (_id)=>{
    // console.log(_id)
    if (!_id) return console.log("please provide id")
   const answers = await prompt(taskQuestions)
//    console.log(answers)
   await updateTasks(_id, answers)
}
)

program.parse(process.argv);