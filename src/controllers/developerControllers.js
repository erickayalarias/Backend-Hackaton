const Developer = require("../models/modelDeveloper")
const {connection} = require("../database/db")


//! Here you will find the controllers that you pass from commands


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
    console.log("Developer deleted")
    await connection.close()
}



const updateDeveloper = async(_id, newdeveloper)=>{
    await Developer.updateOne({_id}, newdeveloper);
    console.log("Developer updated");
    await connection.close();
}



const findDeveloper = async (devUser)=> {
   const search =  new RegExp(devUser, "i");
   const user = await Developer.find({
       $or:[ {category: search},{date: search}]
   })
   if(user.length === 0){
       console.log("Developers not found")
       await connection.close();
       process.exit(0);
   }else{
       console.table(user.map(developer =>({
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
}




module.exports = {
    insertDeveloper,
    listDevelopers,
    removeDeveloper,
    updateDeveloper,
    findDeveloper,
    Developer
};
