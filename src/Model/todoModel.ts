import mongoose,{Schema} from "mongoose";

interface todoInstsnce{
    _id: string;
    description: string;
    status: boolean;
}

const todoSchema = new Schema({
    description:{type:String, require:true},
    status: {type:Boolean}
},
{
    timestamps: true
})

export const Todo = mongoose.model<todoInstsnce>("Todo", todoSchema)

// mongodb+srv://decagon:<decagon>@cluster0.ijygpck.mongodb.net/?retryWrites=true&w=majority;