let rst = document.querySelector("#cod").innerText;
let rgb1 = document.querySelector("#rgb1");
let rgb2 = document.querySelector("#rgb2");
let rgb3 = document.querySelector("#rgb3");

let btn = document.querySelector("#btn");
let aAlpha = "abcdef".split("");
let aNum = "0123456789".split("");
let body = document.getElementsByTagName("body")[0];
let bot = document.getElementsByTagName("button")[0];

for(let i= 0; i < aNum.length ; i++) {
    aAlpha.push(aNum[i]);
}

function rnd(a, b) {
    let rnd;
    rnd = Math.random();
    rnd = rnd * (b - a) + a;
    rnd = Math.floor(rnd);
    return rnd;
}

btn.addEventListener("click", botao);

function botao() {
    let rd = "#",
    rd2 = "#",
    rd3 = "#",
    str;
    
    while (rd.length<=6) {
    rd += aAlpha[rnd(0, aAlpha.length-1)];
    }
    
    rgb1.innerText = rd;
    
    while (rd2.length<=6) {
    rd2 += aAlpha[rnd(0, aAlpha.length-1)];
    }
    
    rgb2.innerText = rd2;
    
    while (rd3.length<=6) {
    rd3 += aAlpha[rnd(0, aAlpha.length-1)];
    }
    
    rgb3.innerText = rd3;
    
    str = "linear-gradient(45deg, " + rd + "," + rd2 + "," + rd3 + ")";
    
    body.style.background = str;
    bot.style.background = str;
}