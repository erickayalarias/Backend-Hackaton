
const Questions =  () =>{
        return [
        {
            type: "input",
            message: "What's your first name?",
            name:"name"
        },
         {
            type: "input",
            message: "What's your email?",
            name:"email"
        },
        {
            type:"list",
            name:"category",
            message: "Select your category",
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
            message: "Select the date that you will go at the event",
            choices:[
                "Feb 28, 2021","Mar 1, 2021","Mar 2, 2021", "Mar 3, 2021",
            ]
        }
    
    ];
}  

module.exports = {
    Questions
}