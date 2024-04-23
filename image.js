
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

// Configure Cloudinary with your cloud credentials
cloudinary.config({
  cloud_name: 'dvdx4mvqx',
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Function to upload a file to Cloudinary and return the URL
const uploadToCloudinary = async (file) => {
  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(file);

    // Return the URL of the uploaded file
    return result.secure_url;
  } catch (error) {
    throw error; // Throw error for handling in the calling function
  }
};
module.exports=uploadToCloudinary

