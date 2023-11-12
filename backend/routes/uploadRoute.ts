import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cloudinary from "cloudinary";
import multer from "multer";

const cloudinaryModule = cloudinary.v2;
// console.log(process.env.cloud_name);

cloudinaryModule.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_key,
  api_secret: process.env.cloud_secret,
});

const router = express.Router();
// Configure Multer
const upload = multer({ dest: 'airbnb/' });

router.post("/", upload.array("files", 4), async (req, res) => {
  try {
    // req.files contains an array of uploaded files
    const files: Express.Multer.File[] = req.files as Express.Multer.File[];


    // Use a loop to upload each file to Cloudinary
    const urls = [];
    for (const file of files) {
      const result = await cloudinaryModule.uploader.upload(file.path);
      // Check if 'result' has a 'secure_url' property
      if (result && result?.secure_url) {
        // Explicitly cast 'result.secure_url' to string
        const secureUrl: string = result?.secure_url as unknown as string;
        urls.push(secureUrl);
      } else {
        // Handle the case where 'secure_url' is not present in the response
        console.log('no url')
      }
    }

    // Optionally, you can respond with the URLs of the uploaded images
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json({ success: true, message: "Images uploaded successfully", urls });
  } catch (error) {
    console.error("Error uploading images:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to upload images" });
  }
});

router.post("/single", upload.single("files"), async (req, res) => {
  try {
    // req.files contains an array of uploaded files
    const files: Express.Multer.File = req.file as Express.Multer.File;

    const result = await cloudinaryModule.uploader.upload(files?.path);
    // Optionally, you can respond with the URLs of the uploaded images
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json({ success: true, message: "Images uploaded successfully", urls: result?.secure_url });
  } catch (error) {
    console.error("Error uploading images:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to upload images" });
  }
});

export default router 
