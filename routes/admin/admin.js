import express from "express";
import {adminView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/loggedIn.js";
import loadUser from "../../src/middlewares/loadUser.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import approveRights from "../../src/middlewares/Approved.js";

const admin = express.Router()

admin.get("/admin", loadUser, auth,approveRights, loadToastMessages, adminView)

export default admin