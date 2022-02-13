const Developer = require("../models/modelDeveloper")
const {connectDatabase, connection} = require("../database/db")


//! Testing: you can run npm run test to check if all is correct and you can run [npm run dbTest] and play with all the commands like [npm run dbTest list] to see the Database only for testing.



describe("Test backend", ()=>{

    beforeAll(async ()=>{
        await connectDatabase()
    })


    afterAll(async ()=>{
        await connection.close();
    });

    //Testings

    //You can change the value of const expected to see errors in the test if you want.

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

    describe("save a developer", () => {
        it("save a developer", async ()=>{
            const developer = new Developer({name:"saveTest", email:"saveTest@gmail.com", category:"Back", phone:"652233009", date:"Mar 2, 2021"});
            const saveDeveloper = await developer.save();
            const expected = "saveTest";
            const actual =saveDeveloper.name;
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

    describe("list developers", () => {
        it("list a developer", async ()=>{
            const developer = await Developer.find().lean();
            const type= typeof developer
            const expected= "object"
            expect(type).toEqual(expected)
        })
    });
});


