import jsonDb from "../jsonDb.js";
import {jsonDbSchema} from "../jsonDbSchema.js";

export const getFrontHeaderLinks = async () => {
    const logoName = await jsonDb.get(jsonDbSchema.logo)
    const facebookLink = await jsonDb.get(jsonDbSchema.facebookLink)
    const instagramLink = await jsonDb.get(jsonDbSchema.instagramLink)

    return {logoName: logoName, facebookLink: facebookLink, instagramLink: instagramLink}
}