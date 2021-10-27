//required functions for testing
const {
    position,
    movement,
    stringToArray
} = require("../MarsRover/MarsRover");


describe("current orientation start N, move left 4 times", () => {
    test("move from North to West", () => {
        expect(position("L")).toBe("W");
    });
    test("move from West to South", () => {
        expect(position("L")).toBe("S");
    });
    test("move from South to East", () => {
        expect(position("L")).toBe("E");
    });
    test("move from East to North", () => {
        expect(position("L")).toBe("N");
    });
});

describe("put directions in an array", () => {
    test("test for each direction letter in an array element", () => {
        expect(stringToArray("LMLM")).toEqual(["L","M","L","M"]);
    });
});

describe("Movement function compound results", () => {
    test("test N movement increases x and y on top of previous moves", () => {
        expect(movement("N")).toBe("0 1");
        });
    test("test E movement increases x and y on top of previous moves", () => {
        expect(movement("E")).toBe("1 1");
        });    
    test("test S movement increases x and y on top of previous moves", () => {
        expect(movement("S")).toBe("1 0");
        });    
    test("test W movement increases x and y on top of previous moves", () => {
        expect(movement("W")).toBe("0 0");
        });    
});
