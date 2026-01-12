let talletMitt = 15;
let annetTall = Math.floor(Math.random() * 21) + 10;

console.log("variabel 1: " + talletMitt + "\nVariabel 2: " + annetTall
    + "\nSum: " + (talletMitt + annetTall)); 


let teller = 0;

function klikk(){
    teller = teller + 1;

    document.getElementById("counter").innerHTML = teller;

    console.log("hei! funksjonen Klikk er aktivert!");
}

function superklikk(){
    teller = teller * teller;

    document.getElementById("counter").innerHTML = teller;

    console.log("SUPERKLIKK");
}

function checkNumber(){
    let n = document.getElementById("input").value;

    if(n >= 100){
        document.getElementById("result").innerHTML = "Stooooort";
    }else{
        document.getElementById("result").innerHTML = "Liiiiiiiiiite";
    }
}