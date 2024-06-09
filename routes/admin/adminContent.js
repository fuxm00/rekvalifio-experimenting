import express from "express";
import auth from "../../src/middlewares/loggedIn.js";
import {
    adminContentView,
    changeHomeTexts,
    changeLogo,
    changeSocialLinks
} from "../../controllers/admin/adminContentController.js";
import {upload} from "../../src/middlewares/upload.js";
import loadToastMessages from "../../src/middlewares/loadToastMessages.js";
import loadUser from "../../src/middlewares/loadUser.js";
import approveRights from "../../src/middlewares/approved.js";

const content = express.Router()

content.get("/admin/content", loadUser, auth, approveRights, loadToastMessages, adminContentView)
content.post("/admin/content/change-logo", loadUser, auth, approveRights, upload.single('logo'), changeLogo)
content.post("/admin/content/change-home-texts", loadUser, auth, approveRights, changeHomeTexts)
content.post("/admin/content/change-social-links", loadUser, auth, approveRights, changeSocialLinks)


export default content