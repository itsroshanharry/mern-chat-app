import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const userExists = await User.exists({ username });

        if (userExists) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create the new user directly using the create method
        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser) {
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();

        // Send success response
        res.status(201).json({ 
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
        } else {
            res.status(400).json({error: "Invalid User data"}) 
        }
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error:"Invalid credentials"});
        }

        generateTokenandSetCookie(user._id, res);

        res.status(200).json({
            _id:user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
        });
        

    }catch(error) {
        console.error("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal server error" });       
    }
    
};

export const logout = (req, res) => {
    try { 
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "Logged out successfully"});
    }catch(error) {
        console.error("Error in logout controller:", error.message);
        res.status(500).json({ error: "Internal server error" }); 
    }
};
