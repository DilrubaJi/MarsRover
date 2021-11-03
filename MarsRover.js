/** 
L.1 Initial grid maximum sets grid size limits

L.2 Initial inputs set global xAxis, yAxis and current orientation state (e.g: 1 2 N)

L.3 input directions example (LMRMLMM)
*/

//  split instructions string into an array, one character per element;
function stringToArray(string) {
    const arrayInstructions = string.split("");
    return arrayInstructions;
}

/**
    Call on each letter in turn (forEach);
    If input value is M then call moveRoverOnePlace function => pass orientationstate to return one step coordinates, 
    If input value is L or R then call changeRoverOrientation function =>  
*/
function roverNavigator(arrInstructions, xAxis3, yAxis3, initialOrientation) {
    let newOrientation = initialOrientation;
    let changedCoordinates = [xAxis3, yAxis3];
    arrInstructions.forEach(character => {
        if (character === "R" || "L") {
            newOrientation = changeRoverOrientation(character, newOrientation);
        };
        if (character === "M") {
            changedCoordinates = moveRoverOnePlace(newOrientation, changedCoordinates);
        };
    });
    return changedCoordinates + " " + newOrientation;
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
function moveRoverOnePlace(orientationState2, changedCoordinates) {
    switch (orientationState2) {
        case "N": changedCoordinates[1]++; break;
        case "E": changedCoordinates[0]++; break;
        case "S": changedCoordinates[1]--; break;
        case "W": changedCoordinates[0]--; break;
    }
    return (changedCoordinates);
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