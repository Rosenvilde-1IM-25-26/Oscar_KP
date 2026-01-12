function hei(){

    let navn = document.getElementById("brukerinput").value; 
    console.log("Hello " + navn);

}


function sjekkTall(){

    let number = document.getElementById("brukerinput").value;

    //Vi har valgt tallet 200

    if(number < 200){
        document.getElementById("resultat").innerHTML = "Liiiiiiite tall";
    }else{
        document.getElementById("resultat").innerHTML = "Stooooooort tall";
    }

}