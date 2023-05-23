import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import User from "../models/userModel.js"

// Auth user/set token
// route POST /api/users/auth
// Public

const authUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch

    const { email, password } = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPasswords(password))){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

// Register a new user
// route POST /api/users
// Public

const registerUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    const { name, email, password } = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }
    
    const user = await User.create({
        name,
        email,
        password
    })

    if(user){

        generateToken(res, user._id) // if user exists, it generates a token and sends it to client
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }

    res.status(200).json({message: "Register user"})
})

// Logout user
// route POST /api/users/logout
// Public

const logoutUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    res.cookie("jwt", '', {
        httpOnly:true,
        expires: new Date(0),
    })
    res.status(200).json({message: "User logged out"})
})

// Get user profile
// route GET /api/users/profile
// Private

const getUserProfile = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    res.status(200).json({message: "User profile"})
})

// Update user profile
// route PUT /api/users/profile
// Private

const updateUserProfile = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    res.status(200).json({message: "Update user profile"})
})

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }