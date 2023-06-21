const assert = require('assert')
const {remove, convertToMonotonic, isAccented, putAccentOnVowel, putAccentOnSyllable} = require("../accentuation")

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
    it("put oxia on a vowel", ()=>{
        assert.equal(putAccentOnVowel('ο'), 'ό')
    })
    it("put accent on a syllable", ()=>{
        assert.equal(putAccentOnSyllable('μεν'), 'μέν')
    })

})

