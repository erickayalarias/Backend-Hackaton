const Developer = require("../models/developers")
const {connectDB, connection} = require("../database/db")
const{listDevelopers} = require("../controllers/developerControllers")

describe("Test backend", ()=>{
    beforeAll(async ()=>{
        await connectDB()
    })
    afterAll(async ()=>{
        await connection.close();
    });

    it("Has a module", ()=>{
        expect(Developer).toBeDefined();
    });

    describe("get developer", () => {
        it("gets a developer", async ()=>{
           const developer = new Developer({name:"getTest", email:"getTest@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
           await developer.save();
           const foundDeveloper= await Developer.findOne({name: "getTest"});
           const expected = "getTest";
           const actual = foundDeveloper.name;
           expect(actual).toEqual(expected);
        })
    });


    describe("get developer", () => {
        it("gets a developer", async ()=>{
           const developer = new Developer({name:"getTest", email:"getTest@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
           await developer.save();
           const foundDeveloper= await Developer.findOne({name: "getTest"});
           const expected = "getTest";
           const actual = foundDeveloper.name;
           expect(actual).toEqual(expected);
        })
    });


    describe("save a developer", () => {
        it("save a developer", async ()=>{
           const developer = new Developer({name:"saveTest", email:"saveTest@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
           const saveDeveloper = await developer.save();
           const expected = "saveTest";
           const actual =saveDeveloper.name;
        //    console.log(actual)
           expect(actual).toEqual(expected);
        })
    });

    describe("update a developer", () => {
        it("update a developer", async ()=>{
            const developer = new Developer({name:"UpdateDev", email:"Updated@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
            await developer.save();
            developer.name="Updated";
            const updateDev = await developer.save();
            const expected = "Updated";
            const actual =updateDev.name;
            expect(actual).toEqual(expected);
        })
    });

    describe("probando el otro endpoint haber que tal", () => {
        it("probando el otro aendpoint haber que tal", async ()=>{
            const probando = await Developer.find().lean();
            console.log(probando)
            const developer = new Developer({name:"UpdateDev", email:"Updated@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
            await developer.save();
            developer.name="Updated";
            const updateDev = await developer.save();
            const expected = "Updated";
            const actual =updateDev.name;
            expect(actual).toEqual(expected);
        })
    });
});


