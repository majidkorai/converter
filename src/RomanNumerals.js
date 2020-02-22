
const romanNumList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
const ToRoman = (number) => {
    let roman = "", err = "";
    let a;
    if (number < 1 || number > 3999)
        err = "Enter a number between 1 and 3999";
    else {
        for (let num in romanNumList) {
            a = Math.floor(number / romanNumList[num]);
            if (a >= 0) {
                for (let i = 0; i < a; i++) {
                    roman += num;
                }
            }
            number = number % romanNumList[num];
        }
    }
    return { result: roman, error: err };
}
const ToNumber = (roman) => {
    roman = roman.toUpperCase();
    let err = ""
    const romanList = Object.keys(romanNumList);
    const numList = Object.values(romanNumList);
    let index = 0, num = 0;
    for (let rn in romanList) {
        index = roman.indexOf(romanList[rn]);
        while (index !== -1) {
            num += parseInt(numList[rn]);
            roman = roman.replace(romanList[rn], "-");
            index = roman.indexOf(romanList[rn]);
        }
    }
    if (num === 0) err = "Please enter a valid roman numeral";
    return { result: num, error: err };
}

export default { ToRoman, ToNumber };