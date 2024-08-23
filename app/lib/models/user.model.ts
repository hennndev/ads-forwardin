import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    image_profile: {
        image_profile_id: {
            type: String,
            default: null
        },
        image_profile_url: {
            type: String,
            default: null
        }
    },
    phone_number: {
        type: String,
        default: null
    },
    password: {
        type: String,
    },
    signup_method: {
        type: String,
        enum: ['credentials', 'google'],
        default: 'credentials'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
})

export const Users = mongoose.models.User || mongoose.model('User', userSchema)