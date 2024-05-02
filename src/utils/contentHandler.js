import fs from "fs";

const path = './src/db/content.json'

export const getContentByKey = async function (key) {
    const rawData = fs.readFileSync(path);
    const data = JSON.parse(rawData)
    return data[key]
}

export const saveContent = async function (value) {
    var data = fs.readFileSync(path);
    var json = JSON.parse(data);
    json['logo'] = value

    fs.writeFile(path, JSON.stringify(json), (err, data) => {
        if (err) throw err;
        console.log(data);
    } )
}