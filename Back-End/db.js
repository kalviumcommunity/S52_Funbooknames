const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')

const startDatabase = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected");
    }catch (err){
        console.log("MongoDB connection error",err)
    }
}

const stopDatabase = async ()=>{
    try{
        await mongoose.disconnect()
        console.log("Mongodb disconneced")
    }catch (err){
        console.log("MongoDB disconnection error",err)
    }
}

const isConnect = ()=> {
    return mongoose.connection.readystate === 1;
}

module.exports = { startDatabase, stopDatabase, isConnect };