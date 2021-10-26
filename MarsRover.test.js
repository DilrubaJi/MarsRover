const {
    navigation,
} = require("../MarsRover/MarsRover");

describe("describe input start position", () => {
    test("test for input values", () => {
        expect(navigation(undefined)).toBe(1);
    });
});