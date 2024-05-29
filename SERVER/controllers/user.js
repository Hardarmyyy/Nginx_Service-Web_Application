const mongoose = require('mongoose')
const User = require('../models/user')

exports.test = async (req, res) => {

    res.status(200).json({message: "WELCOME TO GRACEFUL START AND SHUTDOWN!"})
}

exports.addUser = async (req, res, next) => {

    const {fName, lName, email, role, github_url} = req.body

    try {
        if (!fName || !lName || !email || !role || !github_url) return res.status(400).json({error: 'All fields are required'})
        
        else {
            let user = new User({...req.body})
            await user.save()
            user = {
                userId: user._id,
                fName: user.fName,
                lName: user.lName,
                email: user.email,
                role: user.role,
                github_url: user.github_url
            }
            res.status(201).json({message: 'user added successfully', user: user})
        }
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.getUser = async (req, res, next) => {
    const {user_id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: "The user ID is invalid!" })
        }

        const user = await User.findById({_id: user_id})
        if (!user) return res.status(404).json({error: 'User not found'});

        res.status(200).json({user: user});

    }
    catch (err) {
        res.status(500).json({error: err.message});
    }

}

exports.getAllUsers = async (req, res, next) => {

    try {

        const allUsers = await User.aggregate([
            {
                $project: {
                    _id: 0,
                    userId: "$_id",
                    fName: "$fName",
                    lName: "$lName",
                    email: "$email",
                    role: "$role",
                    github_url: "$github_url",
                }
            },
            {
                $sort: {
                    createdAt: -1
                }
            }
        ])

        if (!allUsers.length) return res.status(404).json({
            error: 'The user list is empty', 
            allUsers: allUsers
        })

        res.status(200).json({ 
            message: 'All users fetched successfully', 
            allUsers: allUsers
        })

    }
    catch (err) {
        res.status(500).json({error: err.message});
    }

}

exports.updateUser = async (req, res, next) => {
        const {user_id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: "The user ID is invalid!" })
        }

        const user = await User.findOne({_id: user_id})
        if (!user) return res.status(404).json({error: 'User not found'});
        
        const {fName, lName, email, role, github_url} = req.body;
        if (!fName || !lName || !email || !role || !github_url) return res.status(400).json({error: 'All fields are required'});
        
        const updateUser = await User.findByIdAndUpdate({_id: user_id}, {$set: req.body}, {new: true})

        res.status(200).json({message: 'user updated successfully', user: updateUser});

    }
    catch (err) {
        res.status(500).json({error: err.message});
    }

}

exports.deleteUser = async (req, res, next) => {
    const {user_id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: "The user ID is invalid!" })
        }

        const user = await User.findOneAndDelete({_id: user_id})
        if (!user)return res.status(404).json({error: 'User not found'});
        
        res.status(200).json({message: 'user deleted successfully'});

    }
    catch (err) {
        res.status(500).json({error: err.message});
    }

}