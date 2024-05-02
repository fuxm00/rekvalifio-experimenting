import express from "express";
import {adminLoginView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/auth.js";
import {adminOrdersView} from "../../controllers/admin/adminOrders.js";
import {adminContentView} from "../../controllers/admin/adminCOntent.js";

const content = express.Router()

content.get("/admin/content", auth, adminContentView)

export default content