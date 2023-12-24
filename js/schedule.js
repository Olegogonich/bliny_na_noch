const schedule = {
    "9":
    [
        "Математика",
        "Русский язык",
        "Биология",
        "География",
        "Литература",
        "Английский язык"
    ],
    "10":
    [
        "Химия",
        "Литература",
        "Информатика",
        "Английский язык",
        "Математика",
        "Физика"
    ],
    "11":
    [
        "Русский язык",
        "Физика",
        "Информатика",
        "География",
        "Математика",
        "Биология"
    ]
}

const classNames = {
    "Математика" : "math",
    "Русский язык" : "rus",
    "Химия" : "chem",
    "Информатика" : "inf",
    "Английский язык" : "eng",
    "Физика" : "phys",
    "Биология" : "bio",
    "География" : "geo",
    "Литература" : "lit"
}

function show(grade, id){
    let div = document.getElementById("class" + grade);
    div.innerHTML = grade + " класс";
    document.body.append(div);
    for (i = 0; i < schedule[grade].length; i++) {
        let div = document.createElement("div");
        div.innerHTML = schedule[grade][i];;
        div.className = classNames[schedule[grade][i]]
        document.body.append(div);
    }
}
show('9', 'class9');
show('10', 'class10');
show('11', 'class11');
