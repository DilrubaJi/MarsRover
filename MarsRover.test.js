const {
    navigation,
    directions,
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
        expect(directions("LMLM")).toEqual(["LMLM"]);
    });

});
