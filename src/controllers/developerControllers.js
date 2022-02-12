const Developer = require("../models/modelDeveloper")
const {connection} = require("../database/db")


//! There you will find the controllers that you pass from commands


const insertDeveloper = async (developer) =>{
    await Developer.create(developer)
    console.log(`Developer ${developer.name} added succesful`)
    await connection.close()
}



const listDevelopers = async ()=>{
    const developers= await Developer.find().lean();
    console.table(developers.map(developer => ({
        _id: developer._id.toString(),
        name: developer.name,
        email: developer.email,
        category: developer.category,
        phone:developer.phone,
        date:developer.date
    })))
    await connection.close();
    process.exit(0);
}



const removeDeveloper = async(_id)=>{
    await Developer.findByIdAndDelete(_id)
    console.log("Assistant deleted")
    await connection.close()
}



const updateDeveloper = async(_id, newdeveloper)=>{
    await Developer.updateOne({_id}, newdeveloper);
    console.log("Asistant updated");
    await connection.close();
}



const findDeveloper = async (devUser)=> {
   const search =  new RegExp(devUser, "i");
   const user = await Developer.find({
       $or:[{name: search},{email: search}, {category: search},{date: search}]
   })
   console.log(user)
   if(user.length === 0){
       console.log("Assistant not found")
       await connection.close();
       process.exit(0);
   }else{
       console.table(
        {
            id: user[0]._id.toString(),
            name: user[0].name,
            email: user[0].email,
            category: user[0].category,
            phone: user[0].email,
            date: user[0].date,
        } 
       )
       await connection.close();
       process.exit(0);
   }
}



module.exports = {
    insertDeveloper,
    listDevelopers,
    removeDeveloper,
    updateDeveloper,
    findDeveloper,
    Developer
};
