import express from "express";
import {adminLoginView, adminView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/auth.js";

const admin = express.Router()

admin.get("/admin", auth, adminView)

admin.get("/admin/login", adminLoginView)

export default admin