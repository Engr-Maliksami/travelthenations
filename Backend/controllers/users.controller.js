const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model'); 
const crypto = require('crypto');

// Function to generate a random secret key
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('base64');
};

// Registration controller
exports.register = async (req, res) => {
    try {
        // Extract user data from request body
        const {firstName, lastName, email, password, profilePicture } = req.body;

        // Check if user with the provided email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Create a new user object
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            profilePicture
        });

        // Save the user to the database
        await newUser.save();

        // Return success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};

// Login controller
exports.login = async (req, res) => {
    try {
        // Extract email and password from request body
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate user-specific secret key
        const userSecretKey = generateSecretKey();

        // Generate JWT token using user-specific secret key
        const token = jwt.sign({ userId: user._id }, userSecretKey, { expiresIn: '30d' });

        // Return token as response
        res.status(200).json({ token });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};
