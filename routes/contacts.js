import {contactsView} from "../controllers/contactsController.js";
import express from "express";

const contacts = express.Router()

contacts.get("/contacts", contactsView)

export default contacts