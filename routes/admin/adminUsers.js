import express from "express";
import {adminUserView} from "../../controllers/admin/adminUsersController.js";
import auth from "../../src/middlewares/auth.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";

const adminUsers = express.Router()

adminUsers.get("/admin/users", auth, loadToastMessages, adminUserView)

export default adminUsers