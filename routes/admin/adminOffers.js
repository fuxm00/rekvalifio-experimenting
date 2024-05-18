import express from "express";
import {addOffer, adminOffersView, adminOfferView, editOffer} from "../../controllers/admin/adminOffersController.js";

const adminOffers = express.Router()

adminOffers.get("/admin/offers", adminOffersView)
adminOffers.get("/admin/offers/:id", adminOfferView)
adminOffers.post("/admin/offers/add-offer", addOffer)
adminOffers.post("/admin/offers/edit-offer/:id", editOffer)

export default adminOffers