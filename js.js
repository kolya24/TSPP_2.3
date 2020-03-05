function WordStatistics8() {
    let str = "Andrey Kolya Andrey Vova Shevchuk nazar kiril"
    var regExp = /(\w+)/g;
    worlArr = regExp.exec(str)
    array = str.match(regExp);
    var uniq = Array.from(new Set(array));
    for (var i = 0; i < uniq.length; i++) {
        document.write(uniq[i] + " " + (str.split(uniq[i]).length - 1) + " ")
    }
   
}


WordStatistics8()