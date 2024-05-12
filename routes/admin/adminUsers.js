import express from "express";
import {adminUserView} from "../../controllers/admin/adminUsersController.js";

const adminUsers = express.Router()

adminUsers.get("/admin/users", adminUserView)

export default adminUsers