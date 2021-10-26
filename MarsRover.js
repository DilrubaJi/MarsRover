function navigation(x, y, position){

    return `${x} ${y} ${position}`;
}

function directions(instructions){

    return [instructions];
}

module.exports = {
    navigation,
    directions,
};