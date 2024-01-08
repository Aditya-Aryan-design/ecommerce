import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    seller: {
        type: Boolean,
        default: false
    }

})

export default models.User || model('User',userSchema)