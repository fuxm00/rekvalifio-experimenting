import moment from "moment";

export const formatDate = async function (date, format) {
    const formatedDate = moment(date).format(format);
    return formatedDate;
}