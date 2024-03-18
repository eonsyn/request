var click = 0;

function mvbtn() {
    var positions = [
        { bottom: "200px", right: "0px", h: "jhuthe insan", img: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNkZGt6a2Jhc2RmNHN5cm1sNHgwZ3Qyd3NpZmQ2a2JoMTNxdTd6diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fikiml0dKfRQ2ZS08E/giphy.gif" },
        { bottom: "250px", right: "98px", h: "ab to saram karo", img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZzZXlka3JteG9pcmNjZWNpdjNtZzMxem91emFoZmVjcDc1Z20wZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u5eXlkXWkrITm/giphy.gif" },
        { bottom: "52px", right: "129px", h: "ab man bhi lo tum ho", img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjlqZXA5M2dpNjhibDFsYTl3eDN3Zm9mMmc2am9zczV0djB6M3IybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MEF1VadKbQBdmd8LCn/giphy.gif" },
        { bottom: "-54px", right: "-54px", h: "YES CLICK KARO AB", img: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGZzZXlka3JteG9pcmNjZWNpdjNtZzMxem91emFoZmVjcDc1Z20wZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u5eXlkXWkrITm/giphy.gif" }
    ];
    var head = document.getElementsByTagName("h2")[0];
    var img = document.getElementById("image");
    var btn = document.getElementById("btnno");

    img.src = positions[click].img;
    head.innerHTML = positions[click].h;
    btn.style.bottom = positions[click].bottom;
    btn.style.right = positions[click].right;

    click = (click + 1) % positions.length;
}


function pop() {
    document.getElementsByClassName("surprise")[0].style.display = "block";
}






