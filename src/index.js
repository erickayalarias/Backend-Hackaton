#!/usr/bin/env node

// Connection with the Database

const {connectDatabase} = require("./database/db");
require("./commands/commands");

async function principalMain(){
    await connectDatabase();
}

principalMain();