function myFunction() {
    var batas = document.getElementById("batas");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("button-more");

    if (batas.style.display === "none") {
        batas.style.display = "inline";
        btnText.innerHTML = "Lebih banyak...";
        moreText.style.display = "none";
    } else {
        batas.style.display = "none";
        btnText.innerHTML = "Lebih sedikit...";
        moreText.style.display = "inline";
    }
}

const listSosmed = {
    "ig": "https://www.instagram/garte666",
    "discord": "www.discordapp.com/users/483667755892080641",
    "github": "https://github.com/violet666666"
};

function outputSosmed() {
    let sosmed = document.getElementById("sosmed");
    let output = document.getElementById("sosmedOutput");

    for (let x in listSosmed) {
        console.log(x);
        console.log(sosmed);
        if (sosmed.value == x) {
            output.innerHTML = `<a href="${listSosmed[x]}">${listSosmed[x]}</a>`;
        }
    }
}