/**
 * NEW IDEA::

input example (LMLMRMM)

If M call movement function, will look at current orientation state viable and use below switch table

N = y++
E = X++
S = Y--
W = X--

If L OR R call directions function below:

If "L" {
    switch(current orientation state)
    case N: to W
    case W: to S
    case S: to E
    case E: to N   

else if "R"
    switch(current orientation state)
    case N: to E
    case E: to S
    case S: to W
    case W: to N    
}
 */
let xAxis = 0;
let yAxis = 0;
const currentOrientationState = "";

function movement(currentOrientationState){
switch(currentOrientationState){
    case "N": yAxis += 1; break;
    case "E": xAxis += 1; break;
    case "S": yAxis -= 1; break;
    case "W": xAxis -= 1; break;
}
return (xAxis + " " + yAxis);
}

function navigation(x, y, position){
    return `${x} ${y} ${position}`;
}

function directions(instructions){
    const splitInstr = instructions.split("");
return splitInstr
}

module.exports = {
    navigation,
    directions,
    movement,
};