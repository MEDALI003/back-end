const jwt = require("jsonwebtoken");
const User = require("../Models/user"); // Assuming "User" is the correct model name

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ msg: "No token provided, authorization denied" });
    }

    // Verify token
    const _id = jwt.verify(token, process.env.SECRET_KEY);
    
    // Check if user exists
    const foundUser = await User.findOne({_id});
    if (!foundUser) {
      return res.status(401).json({ msg: "User associated with the token not found, authorization denied" });
    }

    // Attach user object to request
    req.user = foundUser;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ msg: "Invalid token, authorization denied" });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: "Token has expired, authorization denied" });
    } else {
      console.error(error);
      return res.status(500).json({ msg: "Server Error" });
    }
  }
};
