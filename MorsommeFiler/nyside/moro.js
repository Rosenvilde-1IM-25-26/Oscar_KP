function hei(){

    let navn = document.getElementById("brukerinput").value; 
    console.log("Hello " + navn);

}


function sjekkTall(){

    let number = document.getElementById("brukerinput").value;

    //Vi har valgt tallet 100

    if(number < 200){
        document.getElementById("resultat").innerHTML = "Liiiiiiite tall";
    }else{
        document.getElementById("resultat").innerHTML = "Stooooooort tall";
    }

}

function billettPris(){

    let alder = document.getElementById("brukerinput").value;

    if(alder <= 13){
        document.getElementById("resultat").innerHTML = "Barnebillett: 50kr";
    }else if(alder > 13 && alder < 18){
        document.getElementById("resultat").innerHTML = "Ungdomsbillett: 100kr";
    }else{
        document.getElementById("resultat").innerHTML = "Voksenbillett: 150kr";
    }
}