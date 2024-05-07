import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token) {
            res.status(401).json({error: "Unauthorised - No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            res.status(401).json({error: "Unauthorised - No token provided"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(404).json({error: "User not found"});
        }

        req.user = user;

    }catch(error) {
        console.log("Error in protectRoute controller: ", error.message);
        res.status(400).json({error: "Internal Server error"});
    }
}

export default protectRoute;