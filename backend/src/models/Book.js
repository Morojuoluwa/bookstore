import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title:{
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    users:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},
{
    timestamps:true
})

const Book = mongoose.model("Book", bookSchema)

export default Book