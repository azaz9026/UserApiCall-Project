const asyncHandler = require('express-async-handler');

// @desc Register a user
// @route post /api/users/register
// @access public


const  registerUser = asyncHandler( async (req , res) => {
    res.status(200).json({message : "register the User"});
});


// @desc login a user
// @route post /api/users/login
// @access public


const  loginUser = asyncHandler( async (req , res) => {
    res.status(200).json({message : "login  User"});
});


// @desc current a user
// @route post /api/users/current
// @access private


const  currentUser = asyncHandler( async (req , res) => {
    res.status(200).json({message : " Current User"});
});




module.exports = {registerUser , loginUser , currentUser}