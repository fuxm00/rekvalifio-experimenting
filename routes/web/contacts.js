import {contactsView} from "../../controllers/web/contactsController.js";
import express from "express";

const contacts = express.Router()

contacts.get("/contacts", contactsView)

export default contacts