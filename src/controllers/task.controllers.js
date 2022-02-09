const Task = require("../models/task")
const {connection} = require("../db")

const addTask = async (task) =>{
    // console.log(task)
    await Task.create(task)
    console.log("new task created")
    await connection.close()
}
const listTasks = async ()=>{
    const tasks= await Task.find().lean();
    console.table(tasks.map(task => ({
        _id: task._id.toString(),
        name: task.name,
        email: task.email,
        category: task.categoria,
        phone:task.phone,
        date:task.date
    })))
    await connection.close();
    process.exit(0);
}
const removeTask = async(_id)=>{
    await Task.findByIdAndDelete(_id)
    console.log("tarea eliminada")
    await connection.close()
}

const updateTasks = async(_id, newTask)=>{
    await Task.updateOne({_id}, newTask);
    console.log("task updated bro");
    await connection.close();
}
module.exports = {
    addTask,
    listTasks,
    removeTask,
    updateTasks
};

