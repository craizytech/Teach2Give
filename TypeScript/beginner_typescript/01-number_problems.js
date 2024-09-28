"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbers = void 0;
const vitest_1 = require("vitest");
// I added the types to the parameters  a and b
//This ensures we ts understands the contracts that our functions must meet
const addTwoNumbers = (a, b) => {
    return a + b;
};
exports.addTwoNumbers = addTwoNumbers;
(0, vitest_1.it)("Should add the two numbers together", () => {
    (0, vitest_1.expect)((0, exports.addTwoNumbers)(2, 4)).toEqual(6);
    (0, vitest_1.expect)((0, exports.addTwoNumbers)(10, 10)).toEqual(20);
});
