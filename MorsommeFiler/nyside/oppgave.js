function adder(){

    let tall1 = Number(document.getElementById("Nils").value); 
    let tall2 = Number(document.getElementById("Kåre").value); 

    let sum = tall1 + tall2;

    console.log(sum);

    document.getElementById("Isak").innerHTML = sum;
}


function hilsen(){

    let navnet = document.getElementById("navn").value;

    console.log("Hei, " + navnet);

    document.getElementById("hilsenen").textContent = "Hei, " + navnet;
}