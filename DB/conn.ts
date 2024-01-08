import mongoose from "mongoose";

const DB = process.env.DB




mongoose.connect(`${DB}`).then(()=>console.log("db connected")).catch(e=>console.log(e))


