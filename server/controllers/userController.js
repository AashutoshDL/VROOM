const UserModel = require('../models/Users');

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(400).json({ error: error.message });
    }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
