import mongoose from "mongoose";

const tasksSchema = mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:String
    },
    finished:{
        type:Boolean
    },

})

const Tasks = mongoose.model("task", tasksSchema)
export default Tasks