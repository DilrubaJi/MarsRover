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
        expect(moveRoverOnePlace("N")).toBe("0 1");
    });
    test("test movement when Rover facing S, decrease y-Axis by 1", () => {
        expect(moveRoverOnePlace("S")).toBe("0 -1");
    });
    test("test movement when Rover facing E, increase x-Axis by 1", () => {
        expect(moveRoverOnePlace("E")).toBe("1 0");
    });
    test("test movement when Rover facing W, decrease x-Axis by 1", () => {
        expect(moveRoverOnePlace("W")).toBe("-1 0");
    });
});

//Testing (roverNavigator) function
//Stubbed
describe("roverNavigator takes single turn instruction and returns end coordinates and position direction", () => {
    test("test single instruction, turn right from North starting", () => {
        expect(roverNavigator(["R"])).toBe("0 0 E");
    });
    test("test single instruction, turn left from South back to East", () => {
        expect(roverNavigator(["L"])).toBe("0 0 W");
    });
    test("test single instruction, turn left from East back to North", () => {
        expect(roverNavigator(["R"])).toBe("0 0 E");
    });
});

describe("roverNavigator takes multiple turn instructions and returns end coordinates and position direction", () => {
    test("test single instruction, turn right from North starting", () => {
        expect(roverNavigator(["R","R","R"])).toBe("0 0 W");
    });
    test("test single instruction, turn right from East to South", () => {
        expect(roverNavigator(["L","L"])).toBe("0 0 S");
    });
    test("test single instruction, turn left from South back to East", () => {
        expect(roverNavigator(["L", "R", "R"])).toBe("0 0 E");
    });
});

describe("roverNavigator takes navigation instructions and returns end coordinates and position direction", () => {
    test("test single instruction, M to move rover in correct direction and return coordinates, set to North", () => {
        expect(roverNavigator(["M"])).toBe("0 1 N");
    });
});