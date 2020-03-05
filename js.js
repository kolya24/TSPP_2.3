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

function DropDuplicateInArray5() {
    var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
    var res = Array.from(new Set(arr))
    document.write(res)
}

function email7() {
    let mail = "nedibil@gmail.com"
    alert(/^[_a-z0-9-+-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i.test(mail));
}
// email7();
function countLetter() {
    let str= "лквжшащшуцщолдоушщуцзщзваар"
    let regular = /[аоуеіи]/g;
    let text= str.match(regular);

    alert("длина строки :"+str.length+ "  гласніе"+ text.length + "  согласніе "+ (str.length-text.length));
}
// countLetter();

function CountInfo () {
    let int = 121
    if (int.toString().length > 4) {
        return null;
    }
    let name = ["Тисячі", "Сотні", "Десятки", "Одиниці"]
    let indexName = 4 - int.toString().length;
    for (var i = 0; i < int.toString().length; i++ , indexName ++) {
        document.writeln(name[indexName] + " " + int.toString()[i])
    }
}

function ChahDesk(leng, heig) {
    this.leng = leng;
    this.heig = heig;

    let char1 = "@"
    let char2 = "#"

    let letters = ['A','B','C','D','F','N','G','X','W','L','M','N','O','P','T','I','Z']
    

    let tempIndex = 1;
    for (var i = 0; i < leng; i++) {
        document.write(leng - i + " ")
        ++tempIndex
        for (var j = 0; j < heig; j++ ) {
            ++ tempIndex
            if (tempIndex % 2 == 0) {
                document.write(char1+" ");
            }
            else {
                document.write(char2+" ");
            }
        }
        document.write("<br>");
    }
    document.write(".   . ")

    for (var i = 0; i < heig; i++) {
        document.write(letters[i]+"  ")
    }
}
