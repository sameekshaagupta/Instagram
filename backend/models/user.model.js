import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    username:{type:String, required:true, unique:true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required:true},
    profilePicture:{type:String,default:''},
    bio:{type:String, default:''},
    gender:{type:String, enum:['male','female']},
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Users'
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Users'
        }
    ],
    posts:[{type:mongoose.Schema.Types.ObjectId, ref:'Posts'}],
    bookmarks:[{types:mongoose.Schema.Types.ObjectId, ref:'Posts'}]
}, {timestamps:true});
export const User = mongoose.model('User', userSchema)