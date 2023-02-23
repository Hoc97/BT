export const FormatDate = (date) => {
    var dd = (date.getDate() + "").padStart(2, '0');
    var mm = ((date.getMonth() + 1) + "").padStart(2, '0');
    var yyyy = date.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

export const GetLastDates = (pastCount) => {
    let arrDate = []
    for (let i = 1; i < pastCount + 1; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i)
        arrDate.push(FormatDate(d))
    }
    return arrDate;
}