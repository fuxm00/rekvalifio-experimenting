import express from "express";
import auth from "../../src/middlewares/auth.js";
import {adminContentView, changeLogo} from "../../controllers/admin/adminContent.js";
import {upload} from "../../src/middlewares/upload.js";

const content = express.Router()

content.get("/admin/content", auth, adminContentView)
content.post("/admin/content/change-logo", auth, upload.single('logo'), changeLogo)

export default content