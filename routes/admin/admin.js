import express from "express";
import {adminView} from "../../controllers/admin/adminController.js";

const admin = express.Router()

admin.get("/admin", adminView)

export default admin