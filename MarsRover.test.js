//required functions for testing
const {
    changeRoverOrientation,
    moveRoverOnePlace,
    stringToArray
} = require("../MarsRover/MarsRover");


describe("current orientation start N, move left 4 times", () => {
    test("move from North to West", () => {
        expect(changeRoverOrientation("L")).toBe("W");
    });
    test("move from West to South", () => {
        expect(changeRoverOrientation("L")).toBe("S");
    });
    test("move from South to East", () => {
        expect(changeRoverOrientation("L")).toBe("E");
    });
    test("move from East to North", () => {
        expect(changeRoverOrientation("L")).toBe("N");
    });
});


describe("put directions in an array", () => {
    test("test for each direction letter in an array element", () => {
        expect(stringToArray("LMLM")).toEqual(["L", "M", "L", "M"]);
    });
});

describe("moveRoverOnePlace function compound results", () => {
    test("test N movement increases x and y on top of previous moves", () => {
        expect(moveRoverOnePlace("N")).toBe("0 1");
    });
    test("test E movement increases x and y on top of previous moves", () => {
        expect(moveRoverOnePlace("E")).toBe("1 1");
    });
    test("test S movement increases x and y on top of previous moves", () => {
        expect(moveRoverOnePlace("S")).toBe("1 0");
    });
    test("test W movement increases x and y on top of previous moves", () => {
        expect(moveRoverOnePlace("W")).toBe("0 0");
    });
});


describe("roverNavigator takes navigation instructions and returns end coordinates and position direction", () => {
    test("test single instruction, turn right from North starting", () => {
        expect(roverNavigator("R")).toBe("E");
    });
});