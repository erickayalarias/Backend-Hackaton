#!/usr/bin/env node

const {connectDB} = require("./database/db");
require("./commands/commands");

async function main(){
    await connectDB();
}

main();