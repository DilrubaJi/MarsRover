
let initialxAxis = 0;
let initialyAxis = 0;
//Global current state of orientation value to keep track of current direction of rover
let initialOrientationState = "N";

/** 
L.1 Initial grid maximum sets grid size limits

L.2 Initial inputs set global xAxis, yAxis and current orientation state (e.g: 1 2 N)

L.3 input example (LMRMLMM)
*/

//  split instructions string into an array, one character per element;
function stringToArray(string) {
    const arrayInstructions = string.split("");
    return arrayInstructions;
}

/**
    Call on each letter in turn (forEach);
    If input value is M then call moveRoverOnePlace function => look at current orientation and changes global xAxis and yAxis state by 1, 
    If input value is L or R then call changeRoverOrientation function =>  
*/
function roverNavigator(arrInstructions) {
    let newOrientation = initialOrientationState;
    let changedCoordinates = initialxAxis + " " + initialyAxis;
    arrInstructions.forEach(character => {
        if (character === "R" || "L") {
            newOrientation = changeRoverOrientation(character, newOrientation);
        };
        if (character === "M") {
            changedCoordinates = moveRoverOnePlace(newOrientation);
        };
    });
    return (changedCoordinates + " " + newOrientation);
};

/**
moveRoverOnePlace function(){
switch
N = y++
E = X++
S = Y--
W = X--
}
*/
function moveRoverOnePlace(orientationState2) {
    let xAxis2 = 0;
    let yAxis2 = 0;
    switch (orientationState2) {
        case "N": yAxis2++; break;
        case "E": xAxis2++; break;
        case "S": yAxis2--; break;
        case "W": xAxis2--; break;
    }
    return (xAxis2 + " " + yAxis2);
}

/**
changeRoverOrientation function(){
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
function changeRoverOrientation(turningCommand, orientationState) {
    if (turningCommand === "L") {
        switch (orientationState) {
            case "N": orientationState = "W"; break;
            case "E": orientationState = "N"; break;
            case "S": orientationState = "E"; break;
            case "W": orientationState = "S"; break;
        }
    }
    if (turningCommand === "R") {
        switch (orientationState) {
            case "N": orientationState = "E"; break;
            case "E": orientationState = "S"; break;
            case "S": orientationState = "W"; break;
            case "W": orientationState = "N"; break;
        }
    }
    return orientationState;
}


//export functions to be tested
module.exports = {
    changeRoverOrientation,
    moveRoverOnePlace,
    stringToArray,
    roverNavigator,
};