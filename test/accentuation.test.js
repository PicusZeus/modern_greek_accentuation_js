"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accentuation_1 = require("../package/accentuation");
const chai_1 = require("chai");
describe("Correctly removes accents and diacritics", () => {
    it("removes simple accents άνθρωπος", () => {
        chai_1.assert.equal(accentuation_1.remove.removeAccentsAndDiacritics("άνθρωπος"), 'ανθρωπος');
    });
    it("removes accents, but diaeresis stays 'προϋπηρεσία'", () => {
        chai_1.assert.equal(accentuation_1.remove.removeAccentsAndDiacritics("προϋπηρεσία"), 'προϋπηρεσια');
    });
    it("removes accents in polytonic system", () => {
        chai_1.assert.equal(accentuation_1.remove.removeAccentsAndDiacritics("ἀγαθοῦ"), "αγαθου");
    });
    it("removes accent", () => {
        chai_1.assert.equal(accentuation_1.remove.removeAccentsAndDiacritics("ρολόι"), "ρολοϊ");
    });
    it("removes accents with diaeresis", () => {
        chai_1.assert.equal(accentuation_1.remove.removeAccentsAndDiacriticsWithDiaeresis("προϋπηρεσία"), "προυπηρεσια");
    });
    it("removes redundant diaeresis", () => {
        chai_1.assert.equal(accentuation_1.remove.removeRedundantDiaeresis("ρολόϊ"), "ρολόι");
    });
});
describe("Correctly converts to monotonic", () => {
    it("ἀγαθοῦ => αγαθού", () => {
        chai_1.assert.equal((0, accentuation_1.convertToMonotonic)("ἀγαθοῦ"), "αγαθού");
    });
    it("converts correctly sentences", () => {
        chai_1.assert.equal((0, accentuation_1.convertToMonotonic)("Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος"), "Μήνιν άειδε, θεά, Πηληϊάδεω Αχιλήος");
    });
});
describe("helper accent functions", () => {
    it("recognizes if a syllable is accented (monotonic)", () => {
        chai_1.assert.equal((0, accentuation_1.isAccented)("μέν"), true);
    });
    it("recognizes if a syllable is accented (polytonic)", () => {
        chai_1.assert.equal((0, accentuation_1.isAccented)("Μῆν"), true);
    });
    it("put oxia on a vowel", () => {
        chai_1.assert.equal((0, accentuation_1.putAccentOnVowel)('ο'), 'ό');
    });
    it("put accent on a syllable", () => {
        chai_1.assert.equal((0, accentuation_1.putAccentOnSyllable)('μεν'), 'μέν');
    });
    it("put accent on a syllable when it's accented", () => {
        chai_1.assert.equal((0, accentuation_1.putAccentOnSyllable)('μέν'), 'μέν');
    });
});
describe('Recognizes placement of an accent', () => {
    it("recognizes ULTIMATE", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)('φακός'), 'ULTIMATE');
    });
    it("recognizes PENULTIMATE", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)("σχολείου"), 'PENULTIMATE');
    });
    it("recognizes ANTEPENULTIMATE", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)("άνθρωπος"), "ANTEPENULTIMATE");
    });
    it("recognizes correctly accent with true syllabification flag false", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)("διαβατήριο", false), "ANTEPENULTIMATE");
    });
    it("recognizes incorrect accent", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)('δίαβατηριο'), "INCORRECT_ACCENT");
    });
    it("returns null if no accent", () => {
        chai_1.assert.equal((0, accentuation_1.whereIsAccent)('διαβατηριο'), null);
    });
});
describe("putAccent puts correctly accent according to input", () => {
    it('ULTIMATE', () => {
        chai_1.assert.equal((0, accentuation_1.putAccent)("φακος", "ULTIMATE"), 'φακός');
    });
    it('PENULTIMATE', () => {
        chai_1.assert.equal((0, accentuation_1.putAccent)("μηλο", "PENULTIMATE"), 'μήλο');
    });
    it('ANTEPENULTIMATE', () => {
        chai_1.assert.equal((0, accentuation_1.putAccent)("θεατρο", "ANTEPENULTIMATE"), 'θέατρο');
    });
    it('PENULTIMATE true syllabification', () => {
        chai_1.assert.equal((0, accentuation_1.putAccent)("κυριου", "PENULTIMATE"), 'κύριου');
    });
    it('PENULTIMATE false syllabification', () => {
        chai_1.assert.equal((0, accentuation_1.putAccent)("κυριου", "PENULTIMATE", false), 'κυρίου');
    });
});
