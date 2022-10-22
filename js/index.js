'use strict'

function validate(){
    let valid = false;
    if(ocument.getElementById("service").checked){
        valid = true;
    }
    else{
        alert("You must slecet at least one sservice.");
        return false;
    }
        
}