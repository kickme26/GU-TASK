/*
    Convert all the strings to title caps in a string array
*/

const toTitleCaps = function (strarray) {
    let title = [];
    for (let i = 0; i < strarray.length; i++) {
        let splittedString = strarray[i].split(" ");

        for (let j = 0; j < splittedString.length; j++) {
            splittedString[j] = splittedString[j].charAt(0).toUpperCase() + splittedString[j].slice(1).toLowerCase();
        }
        title[i] = splittedString.join(" ");
    }
    for (let i = 0; i < title.length; i++) {
        console.log(title[i]);
    }
}
const result = toTitleCaps(["Hellow everyone", "Time to rock", "day is not enough"]);
