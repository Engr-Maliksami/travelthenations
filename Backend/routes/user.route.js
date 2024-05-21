const express = require('express');
const app= express();
const router = express.Router();
const UserController = require('../controllers/users.controller'); // Check the path


// Route for user registration
router.post('/register', UserController.register);

// // Route for user login
 router.post('/login', UserController.login);


app.get('/test', (req, res)=>{
    res.send("hello thats working")
})

// // Route for fetching user profile
// router.get('/profile/:userId', UserController.getUserProfile);

// // Route for updating user profile
// router.put('/profile/:userId', UserController.updateUserProfile);

// // Route for deleting user account
// router.delete('/profile/:userId', UserController.deleteUserProfile);

module.exports = router;
