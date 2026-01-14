//God dag
document.getElementById("resultat").textContent = "God dag";

function JahnTeigen(navn){
    console.log("Hei " + navn);
}

JahnTeigen("Chris");

let tall = 8;

if(tall <= 3){
    console.log("Lite tall");
}else if(tall > 3 && tall < 7){
    console.log("Middels tall");
}else{
    console.log("Stort tall");
}