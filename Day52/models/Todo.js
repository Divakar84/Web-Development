import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    isDone: Boolean
})

export const Todo = mongoose.model('Todo',TodoSchema)