function isLeap(year) {
    var output;
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 ===0)) {
    output = "Leap year."
    } else {
        output = "Not leap year."
    } 
return output;
}
