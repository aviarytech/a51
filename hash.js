"use strict";
exports.__esModule = true;
var sha256_1 = require("@stablelib/sha256");
var combineAndHash = function (part1, part2) {
    var firstBytes = new Uint8Array(Buffer.from(part1).buffer);
    var nextBytes = new Uint8Array(Buffer.from(part2).buffer);
    var value = Buffer.concat([firstBytes, nextBytes]);
    return Buffer.from(sha256_1.hash(value)).toString("hex");
};
console.log(combineAndHash("Varyag", "11438750"));
