//currentOrientationState = jest.fn().mockReturnValueOnce("E")
//required functions for testing
const {
    changeRoverOrientation,
    moveRoverOnePlace,
    stringToArray,
    roverNavigator,
} = require("./MarsRover");


//Testing (changeRoverOrientation) function
describe("Moving Rover left", () => {
    test("move from North to West", () => {
        expect(changeRoverOrientation("L", "N")).toBe("W");
    });
    test("move from East to North", () => {
        expect(changeRoverOrientation("L", "E")).toBe("N");
    });
    test("move from West to South", () => {
        expect(changeRoverOrientation("L", "W")).toBe("S");
    });
    test("move from South to East", () => {
        expect(changeRoverOrientation("L", "S")).toBe("E");
    });
});

describe("Moving Rover right", () => {
    test("move from West to North", () => {
        expect(changeRoverOrientation("R", "W")).toBe("N");
    });
    test("move from East to South", () => {
        expect(changeRoverOrientation("R", "E")).toBe("S");
    });
    test("move from North to East", () => {
        expect(changeRoverOrientation("R", "N")).toBe("E");
    });
    test("move from South to West", () => {
        expect(changeRoverOrientation("R", "S")).toBe("W");
    });
});

//Testing (stringToArray) function
describe("put directions in an array", () => {
    test("test for each direction letter in an array element", () => {
        expect(stringToArray("LMLM")).toEqual(["L", "M", "L", "M"]);
    });
});

//Testing (moveRoverOnePlace) function
describe("moveRoverOnePlace function", () => {
    test("test movement when Rover facing N, increase y-Axis by 1", () => {
        expect(moveRoverOnePlace("N",[0,0])).toEqual([0,1]);
    });
    test("test movement when Rover facing S, decrease y-Axis by 1", () => {
        expect(moveRoverOnePlace("S",[0,0])).toEqual([0,-1]);
    });
    test("test movement when Rover facing E, increase x-Axis by 1", () => {
        expect(moveRoverOnePlace("E",[0,0])).toEqual([1,0]);
    });
    test("test movement when Rover facing W, decrease x-Axis by 1", () => {
        expect(moveRoverOnePlace("W",[0,0])).toEqual([-1,0]);
    });
});

//Testing (roverNavigator) function
//Stubbed
describe("roverNavigator takes single turn instruction and returns end coordinates and position direction", () => {
    test("test single instruction, turn right from North to East", () => {
        expect(roverNavigator(["R"],0,0,"N")).toBe("0,0 E");
    });
    test("test single instruction, turn left from South to East", () => {
        expect(roverNavigator(["L"],0,0,"S")).toBe("0,0 E");
    });
    test("test single instruction, turn left from West to South", () => {
        expect(roverNavigator(["L"],0,0,"W")).toBe("0,0 S");
    });
});

describe("roverNavigator takes multiple turn instructions and returns end coordinates and position direction", () => {
    test("test multiple right turns, start North", () => {
        expect(roverNavigator(["R","R","R"],0,0,"N")).toBe("0,0 W");
    });
    test("test multiple left turns, start West", () => {
        expect(roverNavigator(["L","L"],0,0,"W")).toBe("0,0 E");
    });
    test("test left and right turns, start East", () => {
        expect(roverNavigator(["L", "R", "R"],0,0,"E")).toBe("0,0 S");
    });
});

describe("roverNavigator takes navigation instructions and returns end coordinates and position direction", () => {
    test("test single instruction, M to move rover in correct direction and return coordinates", () => {
        expect(roverNavigator(["M"],0,0,"N")).toBe("0,1 N");
        expect(roverNavigator(["M"],0,0,"E")).toBe("1,0 E");
    });
});

describe("roverNavigator takes navigation instructions and returns end coordinates and position direction", () => {
    test("test single instruction, M to move rover in correct direction and return coordinates", () => {
        expect(roverNavigator(["M"],1,1,"N")).toBe("1,2 N");
        //expect(roverNavigator(["M","M","M","M"],0,0,"E")).toBe("4 0 E");
    });
});

//test out of bounds -x
//test out of bounds -y
//test out of bounds grid limit x++
//test out of bounds grid limit y++
//test invalid inputs
//test no inputs
//test lowercase inputs