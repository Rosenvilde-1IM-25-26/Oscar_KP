/*

- Function
- If / else if / else
- document.getElementById()
- console.log()
- variabler (let, var, const)
- parameter
- boolean
- return

*/

function oppgave(){

    console.log(2 < 5);

    if(1 > 2){ //false
        console.log("1 er større");
    }else if(1 < 2){ //true
        console.log("2 er større");
    }

}


function parameterMoro( enGreie ){

    console.log(enGreie > 100);
}


function returnMoro(){

    return 4;
}

let tall = 4;
var tall2 = 120;

function multipliser(faktor1, faktor2){

    return (faktor1 * faktor2);
}

console.log("Tall 1: " + tall);
console.log("Tall 2: " + tall2);
console.log("Ganget sammen: " + multipliser(tall, tall2));
