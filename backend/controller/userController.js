import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

// Auth user/set token
// route POST /api/users/auth
// Public

const authUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    res.status(200).json({message: "Auth User"})
})

// Register a new user
// route POST /api/users
// Public

const registerUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    console.log(req.body)
    res.status(200).json({message: "Register user"})
})

// Logout user
// route POST /api/users/logout
// Public

const logoutUser = asyncHandler(async(req, res) => { // asyncHandler automatically does try/catch
    res.status(200).json({message: "Logout user"})
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