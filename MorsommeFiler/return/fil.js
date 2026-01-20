/*
- return
- parameter
- boolean
*/

function Kattepus(en, to){

    if(en > to){
        return en;
    }else if(to > en){
        return to;
    }
}

function storstTall(){
    
    let tall3 = document.getElementById("tall1").value; 
    let tall4 = document.getElementById("tall2").value; 

    document.getElementById("svar").innerHTML = Kattepus(tall3, tall4);
}
