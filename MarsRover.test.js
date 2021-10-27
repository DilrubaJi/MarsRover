const {
    navigation,
    directions,
    movement,
} = require("../MarsRover/MarsRover");

describe("describe input start position", () => {
    test("test for input 0 0 N values", () => {
        expect(navigation(0,0,"N")).toBe("0 0 N");
    });
    test("test for input 1 3 N values", () => {
        expect(navigation(1,3,"N")).toBe("1 3 N");
    });
    test("test for input 3 4 S values", () => {
        expect(navigation(3,4,"S")).toBe("3 4 S");
    });
});

describe("put directions in an array", () => {
    test("test for each direction letter in an array element", () => {
        expect(directions("LMLM")).toEqual(["L","M","L","M"]);
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
