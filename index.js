function f1() {
    var x = document.getElementById("intro1");
    var y = document.getElementById("intro2");
    var z = document.getElementById("intro3");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function f2() {
    var x = document.getElementById("intro1");
    var y = document.getElementById("intro2");
    var z = document.getElementById("intro3");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
    }
}

function f3() {
    var x = document.getElementById("intro1");
    var y = document.getElementById("intro2");
    var z = document.getElementById("intro3");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}