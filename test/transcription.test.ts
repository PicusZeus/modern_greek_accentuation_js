import { assert } from "chai"
const {simpleTranscription, erasmianTranscription, modernTranscription} = require("../package/transcription")


describe('Transcriptions', () => {
    it("simple transcription", () => {
        assert.equal(simpleTranscription("άνθρωπος"), 'anthropos')
    })
    it("simle transcription", ()=> {
        assert.equal(simpleTranscription("διεύθυνση"), "dieuthunsh")
    })
    it("erasmian transcription", () => {
        assert.equal(erasmianTranscription("ἥλιος"), 'helios')
    })
    it("erasmian transcription", () => {
        assert.equal(erasmianTranscription("γνῶθι σεαυτόν"), 'gnothi seauton')
    })
    it("erasmian transcription", () => {
        assert.equal(erasmianTranscription("άνθρωπος"), 'anthropos')
    })
    it("modern transcription", () => {
        assert.equal(modernTranscription("χέρι"), "chieri")
    })
    it("modern transcription", () => {
        assert.equal(modernTranscription("διεύθυνση"), "dhiefthinsi")
    })
})