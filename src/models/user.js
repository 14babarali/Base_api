const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     socialSignIn: { type: Boolean, default: false },
//     // other user-related fields
// });


// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     socialSignIn: { type: Boolean, default: false },
//     dateOfBirth: { type: Date, required: true },
//     registrationDate: { type: Date, default: Date.now },
//     profile: {
//         bio: { type: String, default: '' },
//         profilePicture: { type: String, default: '' }
//     },
//     settings: {
//         theme: { type: String, default: 'light' },
//         notifications: {
//             email: { type: Boolean, default: true },
//             sms: { type: Boolean, default: false }
//         }
//     }
// });


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    socialSignIn: { type: Boolean, default: false },
    dateOfBirth: { type: Date, required: true },
    registrationDate: { type: Date, default: Date.now },
    profile: {
        bio: { type: String, default: '' },
        profilePicture: { type: String, default: '' },
        address: {
            street: { type: String, default: '' },
            city: { type: String, default: '' },
            state: { type: String, default: '' },
            zipCode: { type: String, default: '' },
            country: { type: String, default: '' }
        }
    },
    settings: {
        theme: { type: String, default: 'light' },
        notifications: {
            email: { type: Boolean, default: true },
            sms: { type: Boolean, default: false },
            push: { type: Boolean, default: false }
        },
        language: { type: String, default: 'en' }
    },
    preferences: {
        newsletterSubscription: { type: Boolean, default: false },
        preferredContactMethod: { type: String, default: 'email' },
        timezone: { type: String, default: 'UTC' }
    },
    accountStatus: {
        isActive: { type: Boolean, default: true },
        isVerified: { type: Boolean, default: false },
        suspendedUntil: { type: Date, default: null }
    },
    roles: [String],
    lastLogin: { type: Date, default: null },
    failedLoginAttempts: { type: Number, default: 0 },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    twoFactorAuth: {
        enabled: { type: Boolean, default: false },
        phoneNumber: { type: String, default: null }
    }
});


// Hashing the password before saving the user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
