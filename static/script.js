function validate() {
    var rowerr = document.getElementById("rowerr")
    var errfname = document.getElementById('fnameerr');
    var errfull = document.getElementById('fullerr');
    var errbd = document.getElementById('bderr');
    var errnum = document.getElementById('numerr');
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
        rowerr.classList.remove("hidden");
        errfname.innerHTML = "This mandatory cell is empty.";
    } else if (/[0-9]/g.test(innerfname) == true) {
        fname.classList.add("error")
        rowerr.classList.remove("hidden");
        errfname.innerHTML = "A first name must not contain numbers.";
    }
    if (/[0-9]/g.test(innerfull) == true) {
        full.classList.add("error")
        rowerr.classList.remove("hidden");
        errfull.innerHTML = "A full name must not contain numbers.";
    }
    if (innerbd == "") {
        bd.classList.add("empty");
        rowerr.classList.remove("hidden");
        errbd.innerHTML = "This mandatory cell is empty.";
    }
    if (innernum == "") {
        num.classList.add("empty");
        rowerr.classList.remove("hidden");
        errnum.innerHTML = "This mandatory cell is empty.";
    } else if (innernum.length != 11) {
        num.classList.add("error");
        rowerr.classList.remove("hidden");
        errnum.innerHTML = "The number must be 11 digits long.";
    }
    if (rowerr.classList.contains("hidden") == true) {
        err.innerHTML = "There are no errors in your information."
    }
}