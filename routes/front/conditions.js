import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {conditionsView} from "../../controllers/front/conditionsController.js";

const conditions = express.Router()

conditions.get("/conditions", conditionsView)

export default conditions