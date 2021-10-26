function navigation(x, y, position){

    return `${x} ${y} ${position}`;
}

function directions(instructions){

    const splitInstr = instructions.split("");
return splitInstr
/**  splitInstr.forEach(element => {
        switch(element){
            case "L":
                console.log("Left");
            break;
            case "M":
                console.log("Move");
            break;    
        }  
*/


}

module.exports = {
    navigation,
    directions,
};