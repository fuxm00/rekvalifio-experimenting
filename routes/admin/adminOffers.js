import express from "express";
import {addOffer, adminOffersView} from "../../controllers/admin/adminOffersController.js";

const adminOffers = express.Router()

adminOffers.get("/admin/offers", adminOffersView)
adminOffers.post("/admin/offers/add-offer", addOffer)

export default adminOffers