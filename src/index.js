#!/usr/bin/env node

const {connectDB} = require("./database/db");
require("./commands");

async function main(){
    await connectDB();
}

main();