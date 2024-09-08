function validate() {
    var err = document.getElementById("err")
    var fname = document.getElementById('fname');
    var full = document.getElementById('full');
    var bd = document.getElementById('bd');
    var num = document.getElementById('num');
    var innerfname = fname.innerHTML.trim();
    var innerfull = full.innerHTML.trim();
    var innerbd = bd.innerHTML.trim();
    var innernum = (num.innerHTML).toString();
    var innernum = innernum.trim();
    if (innerfname == "") {
        fname.classList.add("empty");
    } else if (/[0-9]/g.test(innerfname) == true) {
        fname.classList.add("error")
    }
    if (/[0-9]/g.test(innerfull) == true) {
        full.classList.add("error")
    }
    if (innerbd == "") {
        bd.classList.add("empty");
    }
    if (innernum == "") {
        num.classList.add("empty");
    } else if (innernum.length != 11) {
        num.classList.add("error")
    }
    if (err.innerHTML == "") {
        err.innerHTML = "Red indicates an empty cell and Yellow indicates a cell with an incorrect format."
    }
}