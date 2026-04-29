import express from "express";
import { RequireForm } from "../controllers/user.js";

const router = express.Router();

// POST route
router.post("/register", RequireForm);

export default router;
