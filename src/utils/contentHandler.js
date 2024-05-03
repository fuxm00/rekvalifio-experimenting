import fs from "fs";

const path = './src/content.json'

export const getContentByKey = async function (key) {
    const data = fs.readFileSync(path);
    const json = JSON.parse(data)
    return json[key]
}

export const saveContent = async function (key, value) {
    var data = fs.readFileSync(path);
    var json = JSON.parse(data);
    json[key] = value

    fs.writeFile(path, JSON.stringify(json, null, 2), (err, data) => {
        if (err) throw err;
    } )
}