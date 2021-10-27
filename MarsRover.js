
let xAxis = 0;
let yAxis = 0;
//Global current state of orientation value to keep track of current direction of rover
let currentOrientationState = "N";

/** 
L.1 Initial grid maximum sets grid size limits

L.2 Initial inputs set global xAxis, yAxis and current orientation state (e.g: 1 2 N)

L.3 input example (LMRMLMM)
*/

//  split instructions string into an array, one character per element;
    function stringToArray(string){
    const arrayInstructions = string.split("");
    return arrayInstructions;
}

/**
    Call on each letter in turn (forEach);
    If input value is M then call moveRoverOnePlace function => look at current orientation and changes global xAxis and yAxis state by 1, 
    If input value is L or R then call navigation function =>  
*/    
//function

/**
moveRoverOnePlace function(){
switch
N = y++
E = X++
S = Y--
W = X--
}
*/
function moveRoverOnePlace(move){
switch(move){
    case "N": yAxis += 1; break;
    case "E": xAxis += 1; break;
    case "S": yAxis -= 1; break;
    case "W": xAxis -= 1; break;
}
return (xAxis + " " + yAxis);
}

/**
navigation function(){
If "L" {
    switch(current orientation state)
    case N: to W
    case E: to N
    case S: to E
    case W: to S   
}
else if "R"{
    switch(current orientation state)
    case N: to E
    case E: to S
    case S: to W
    case W: to N    
}
}
 */
function changeRoverOrientation(turning){
    if (turning === "L"){
        switch(currentOrientationState){
            case "N": currentOrientationState = "W"; break;
            case "E": currentOrientationState = "N"; break;
            case "S": currentOrientationState = "E"; break;
            case "W": currentOrientationState = "S"; break;
        }
    }
    if (turning === "R"){
        switch(currentOrientationState){
            case "N": currentOrientationState = "E"; break;
            case "E": currentOrientationState = "S"; break;
            case "S": currentOrientationState = "W"; break;
            case "W": currentOrientationState = "N"; break;
        }
    }
    return currentOrientationState;
}


//export functions to be tested
module.exports = {
    changeRoverOrientation,
    moveRoverOnePlace,
    stringToArray
};