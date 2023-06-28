"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const syllabify_1 = require("../package/syllabify");
const chai_1 = require("chai");
describe("correctly divide word into syllables", () => {
    it("monotonic true syllabification", () => {
        chai_1.assert.equal(String((0, syllabify_1.modernGreekSyllabify)("άνθρωπος")), String(["άν", "θρω", "πος"]));
    });
    it("monotonic true syllabification", () => {
        chai_1.assert.equal(String((0, syllabify_1.modernGreekSyllabify)("κυριου")), String(["κυ", "ριου"]));
    });
    it("monotonic true syllabification", () => {
        chai_1.assert.equal(String((0, syllabify_1.modernGreekSyllabify)("κυρίου")), String(["κυ", "ρί", "ου"]));
    });
    it("monotonic false syllabification", () => {
        chai_1.assert.equal(String((0, syllabify_1.modernGreekSyllabify)("κυριου", false)), String(["κυ", "ρι", "ου"]));
    });
});
