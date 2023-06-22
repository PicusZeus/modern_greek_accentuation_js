const assert = require('assert')
const {
    remove, convertToMonotonic, isAccented, putAccentOnVowel,
    putAccentOnSyllable, whereIsAccent, putAccent, removeRedundantDiaeresis
} = require("../package/accentuation")

describe("Correctly removes accents and diacritics", () => {
    it("removes simple accents άνθρωπος", () => {
        assert.equal(remove.removeAccentsAndDiacritics("άνθρωπος"), 'ανθρωπος')
    })
    it("removes accents, but diaeresis stays 'προϋπηρεσία'", () => {
        assert.equal(remove.removeAccentsAndDiacritics("προϋπηρεσία"), 'προϋπηρεσια')
    })
    it("removes accents in polytonic system", () => {
        assert.equal(remove.removeAccentsAndDiacritics("ἀγαθοῦ"), "αγαθου")
    })
    it("removes accents with diaeresis", () => {
        assert.equal(remove.removeAccentsAndDiacriticsWithDiaeresis("προϋπηρεσία"), "προυπηρεσια")
    })
    it("removes redundant diaeresis", ()=>{
        assert.equal(remove.removeRedundantDiaeresis("ρολόϊ"), "ρολόι")
    })
})

describe("Correctly converts to monotonic", () => {
    it("ἀγαθοῦ => αγαθού", () => {
        assert.equal(convertToMonotonic("ἀγαθοῦ"), "αγαθού")
    })
    it("converts correctly sentences", () => {
        assert.equal(convertToMonotonic("Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος"), "Μήνιν άειδε, θεά, Πηληϊάδεω Αχιλήος")
    })
})

describe("helper accent functions", () => {
    it("recognizes if a syllable is accented (monotonic)", () => {
        assert.equal(isAccented("μέν"), true)
    })
    it("recognizes if a syllable is accented (polytonic)", () => {
        assert.equal(isAccented("Μῆν"), true)
    })
    it("put oxia on a vowel", () => {
        assert.equal(putAccentOnVowel('ο'), 'ό')
    })
    it("put accent on a syllable", () => {
        assert.equal(putAccentOnSyllable('μεν'), 'μέν')
    })
    it("put accent on a syllable when it's accented", () => {
        assert.equal(putAccentOnSyllable('μέν'), 'μέν')
    })

})

describe('Recognizes placement of an accent', () => {
    it("recognizes ULTIMATE", () => {
        assert.equal(whereIsAccent('φακός'), 'ULTIMATE')
    })
    it("recognizes PENULTIMATE", () => {
        assert.equal(whereIsAccent("σχολείου"), 'PENULTIMATE')
    })
    it("recognizes ANTEPENULTIMATE", () => {
        assert.equal(whereIsAccent("άνθρωπος"), "ANTEPENULTIMATE")
    })
    it("recognizes correctly accent with true syllabification flag false", () => {
        assert.equal(whereIsAccent("διαβατήριο", false), "ANTEPENULTIMATE")
    })
    it("recognizes incorrect accent", () => {
        assert.equal(whereIsAccent('δίαβατηριο'), "INCORRECT_ACCENT")
    })
    it("returns null if no accent", () => {
        assert.equal(whereIsAccent('διαβατηριο'), null)
    })
})

describe("putAccent puts correctly accent according to input", () => {
    it('ULTIMATE', () => {
        assert.equal(putAccent("φακος", "ULTIMATE"), 'φακός')
    })
    it('PENULTIMATE', () => {
        assert.equal(putAccent("μηλο", "PENULTIMATE"), 'μήλο')
    })
    it('ANTEPENULTIMATE', () => {
        assert.equal(putAccent("θεατρο", "ANTEPENULTIMATE"), 'θέατρο')
    })
    it('PENULTIMATE true syllabification', () => {
        assert.equal(putAccent("κυριου", "PENULTIMATE"), 'κύριου')
    })
    it('PENULTIMATE false syllabification', () => {
        assert.equal(putAccent("κυριου", "PENULTIMATE", false), 'κυρίου')
    })
})
