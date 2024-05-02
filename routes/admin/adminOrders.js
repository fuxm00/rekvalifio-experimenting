import express from "express";
import {adminLoginView} from "../../controllers/admin/adminController.js";
import auth from "../../src/middlewares/auth.js";
import {adminOrdersView} from "../../controllers/admin/adminOrders.js";

const orders = express.Router()

orders.get("/admin/orders", auth, adminOrdersView)

export default orders