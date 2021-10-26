const {
    navigation,
} = require("../MarsRover/MarsRover");

describe("describe input start position", () => {
    test("test for input values", () => {
        expect(navigation(0,0)).toBe("0 0");
    });
});

