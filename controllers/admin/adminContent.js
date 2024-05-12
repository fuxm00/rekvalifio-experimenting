import jsonDb from "../../src/jsonDb.js";
import {jsonDbSchema} from "../../src/jsonDbSchema.js";

export const adminContentView = async (req, res) => {

    const homeContent = await jsonDb.get(jsonDbSchema.home)
    const coursesContent = await jsonDb.get(jsonDbSchema.courses)
    const contactsContent = await jsonDb.get(jsonDbSchema.contacts)
    const gdprContent = await jsonDb.get(jsonDbSchema.gdpr)
    const conditionContent = await jsonDb.get(jsonDbSchema.conditions)

    res.render("admin/content", {
        title: 'Obsah',
        homeContent,
        coursesContent,
        contactsContent,
        gdprContent,
        conditionContent
    });
}

export const changeLogo = async (req, res) => {

    const {filename} = req.file
    await jsonDb.set(jsonDbSchema.logo, filename);

    res.redirect('back')
}

export const changeHomeTexts = async (req, res) => {

    const {homeContent, coursesContent, contactsContent, gdprContent,conditionsContent} = req.body;

    await jsonDb.set(jsonDbSchema.home, homeContent);
    await jsonDb.set(jsonDbSchema.courses, coursesContent);
    await jsonDb.set(jsonDbSchema.contacts, contactsContent);
    await jsonDb.set(jsonDbSchema.gdpr, gdprContent);
    await jsonDb.set(jsonDbSchema.conditions, conditionsContent);

    res.redirect('back')
}