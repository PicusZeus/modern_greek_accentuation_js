import { modernGreekSyllabify } from "../package/syllabify"
import { assert } from "chai"

describe("correctly divide word into syllables", ()=>{
    it("monotonic true syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("άνθρωπος")), String(["άν", "θρω", "πος"]))
    })
    it("monotonic true syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("κυριου")), String(["κυ", "ριου"]))
    })
    it("monotonic true syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("κυρίου")), String(["κυ", "ρί", "ου"]))
    })
        it("monotonic false syllabification", ()=>{
        assert.equal(String(modernGreekSyllabify("κυριου", false)), String(["κυ", "ρι", "ου"]))
    })
})
