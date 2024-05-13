const multer = require('multer');
const UserModel = require('../models/Users');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

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
    const {name,phoneNumber,age ,address,accountType}=req.body
    const image=req.file.filename;
    const orgName=req.file.originalname;

    const userData={
        name,
        phoneNumber,
        age,
        address,
        accountType,
        orgName,
        image
    }

    const newUser = await UserModel.create(userData);
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
    const {name,phoneNumber,age ,address,accountType}=req.body;
    const updatedData={
      name,
      phoneNumber,
      age,
      address,
      accountType,
    }

    if (req.file) {
      updatedData.image = req.file.filename;
    }
    
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
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
