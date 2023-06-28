"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { simpleTranscription, erasmianTranscription, modernTranscription } = require("../package/transcription");
describe('Transcriptions', () => {
    it("simple transcription", () => {
        chai_1.assert.equal(simpleTranscription("άνθρωπος"), 'anthropos');
    });
    it("simle transcription", () => {
        chai_1.assert.equal(simpleTranscription("διεύθυνση"), "dieuthunsh");
    });
    it("erasmian transcription", () => {
        chai_1.assert.equal(erasmianTranscription("ἥλιος"), 'helios');
    });
    it("erasmian transcription", () => {
        chai_1.assert.equal(erasmianTranscription("γνῶθι σεαυτόν"), 'gnothi seauton');
    });
    it("erasmian transcription", () => {
        chai_1.assert.equal(erasmianTranscription("άνθρωπος"), 'anthropos');
    });
    it("modern transcription", () => {
        chai_1.assert.equal(modernTranscription("χέρι"), "chieri");
    });
    it("modern transcription", () => {
        chai_1.assert.equal(modernTranscription("διεύθυνση"), "dhiefthinsi");
    });
});
