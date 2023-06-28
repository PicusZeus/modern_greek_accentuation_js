"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modernTranscription = exports.erasmianTranscription = exports.simpleTranscription = void 0;
const accentuation_1 = require("./accentuation");
const syllabify_1 = require("./syllabify");
const resources_1 = require("./resources");
function simpleTranscription(word, h = null, modern = false) {
    const syllabified = (0, syllabify_1.modernGreekSyllabify)(word, false);
    let transcr_meth = resources_1.ancient_tr;
    if (modern) {
        transcr_meth = resources_1.modern_tr;
    }
    if (h) {
        transcr_meth.vowels.η = h;
    }
    const transcribed_syllables = [];
    for (let syllable of syllabified) {
        let s = syllable;
        syllable = accentuation_1.remove.removeAccentsAndDiacritics(syllable);
        let transcribed_syllable = '';
        while (true) {
            if (transcr_meth.digraphs.hasOwnProperty(syllable.slice(0, 2).toLowerCase())) {
                const el = syllable.slice(0, 2).toLowerCase();
                const transcription = transcr_meth.digraphs[el];
                transcribed_syllable += transcription;
                syllable = syllable.slice(2);
            }
            else if (transcr_meth.vowels.hasOwnProperty(syllable[0].toLowerCase())) {
                const el = syllable[0].toLowerCase();
                const transcription = transcr_meth.vowels[el];
                transcribed_syllable += transcription;
                syllable = syllable.slice(1);
            }
            else if (transcr_meth.consonants.hasOwnProperty(syllable[0].toLowerCase())) {
                const el = syllable[0].toLowerCase();
                const transcription = transcr_meth.consonants[el];
                transcribed_syllable += transcription;
                syllable = syllable.slice(1);
            }
            else {
                transcribed_syllable += syllable[0];
                syllable = syllable.slice(1);
            }
            if (syllable.length === 0) {
                if (modern) {
                    const replacements = { 'ke': 'kie', 'che': 'chie', 'ghe': 'ghie' };
                    for (const [ke, replacement] of Object.entries(replacements)) {
                        transcribed_syllable = transcribed_syllable.replace(ke, replacement);
                    }
                    transcribed_syllable = transcribed_syllable.replace('ghi', 'j');
                    if (transcribed_syllable.includes('j') && !Array.from(transcribed_syllable).filter(value => ['e', 'o', 'a', 'u', 'i'].includes(value))) {
                        transcribed_syllable = transcribed_syllable.replace('j', 'ji');
                    }
                }
                break;
            }
        }
        transcribed_syllables.push(transcribed_syllable);
    }
    let transcribed_word = transcribed_syllables.join('');
    transcribed_word = capitalizeOrUpperTranscription(word, transcribed_word);
    return transcribed_word;
}
exports.simpleTranscription = simpleTranscription;
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function capitalizeOrUpperTranscription(word, transcription) {
    if (capitalize(word) === word) {
        return capitalize(transcription);
    }
    else if (word.toUpperCase() === word) {
        return transcription.toUpperCase();
    }
    else {
        return transcription;
    }
}
function hasRoughBreathing(word) {
    const decomposed = word[0].normalize("NFD");
    if (resources_1.vowels.includes(decomposed[0].toLowerCase())) {
        if (decomposed.includes(resources_1.DASIA)) {
            return true;
        }
        else if (word.length > 1) {
            const decomposed_2 = word[1].normalize('NFD');
            if (decomposed_2.includes(resources_1.DASIA) && resources_1.vowels.includes(decomposed_2)) {
                return true;
            }
        }
    }
    return false;
}
function erasmianTranscription(word) {
    let transcription = simpleTranscription(word, 'e');
    if (hasRoughBreathing(word)) {
        transcription = 'h' + transcription;
    }
    transcription = capitalizeOrUpperTranscription(word, transcription);
    return transcription;
}
exports.erasmianTranscription = erasmianTranscription;
function modernTranscription(word) {
    let transcription = simpleTranscription(word, null, true);
    if (transcription.includes('w')) {
        const ws = [...transcription.matchAll(/w/g)];
        if (ws) {
            for (const w of ws) {
                const index = w.index;
                if (index && transcription.length > index + 1) {
                    if (['t', 'p', 'k', 's'].includes(transcription[index + 1]) || (transcription.length > index + 3 && transcription.slice(index + 1, index + 3) === 'ch')) {
                        transcription = transcription.slice(0, index) + 'f' + transcription.slice(index + 1);
                    }
                }
                else if (index) {
                    const trans = [...transcription];
                    trans[index] = 'f';
                    transcription = trans.join('');
                }
            }
        }
    }
    return transcription;
}
exports.modernTranscription = modernTranscription;
