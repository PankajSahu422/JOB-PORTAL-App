import express from "express";
import isAuthenticated  from "../middleware/isAuthenticated.js";
import { get } from "mongoose";
import { getCompany, getCompanybyId, registerCompany, updateCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanybyId);
router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
