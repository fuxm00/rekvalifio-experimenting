import {contactsView} from "../../controllers/front/contactsController.js";
import express from "express";
import {conditionsView} from "../../controllers/front/conditionsController.js";
import {gdprView} from "../../controllers/front/gdprController.js";

const gdpr = express.Router()

gdpr.get("/gdpr", gdprView)

export default gdpr