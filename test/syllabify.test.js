const {modernGreekSyllabify} = require("../package/syllabify")
const assert = require("assert")

describe("correctly divide word into syllables", ()=>{
    it("monotonic true syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("άνθρωπος")), String(["άν", "θρω", "πος"]))
    })
    it("monotonic true syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("κυριου")), String(["κυ", "ριου"]))
    })
        it("monotonic false syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("κυριου", false)), String(["κυ", "ρι", "ου"]))
    })
})
