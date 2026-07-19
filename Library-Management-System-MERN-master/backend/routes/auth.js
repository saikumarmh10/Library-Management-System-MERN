import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

/* ===========================
   USER REGISTRATION
=========================== */
router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      userType: req.body.userType,
      userFullName: req.body.userFullName,
      admissionId: req.body.admissionId,
      employeeId: req.body.employeeId,
      age: req.body.age,
      dob: req.body.dob,
      gender: req.body.gender,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin || false,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      user: savedUser,
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* ===========================
   USER LOGIN
=========================== */
router.post("/signin", async (req, res) => {
  try {
    console.log("========== LOGIN REQUEST ==========");
    console.log("Request Body:", req.body);

    const user = await User.findOne({
      email: req.body.email,
    });

    console.log("User Found:", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    console.log("Entered Password:", req.body.password);
    console.log("Stored Hash:", user.password);
    console.log("Password Match:", validPassword);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const { password, ...userData } = user._doc;

    console.log("LOGIN SUCCESS");

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: userData,
    });
  } catch (err) {
    console.log("LOGIN ERROR:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;