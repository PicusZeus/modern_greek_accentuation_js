"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSyllables = exports.hasVowel = exports.modernGreekSyllabify = exports.divideIntoSyllables = exports.cutOffSyllable = void 0;
const resources_1 = require("./resources");
function cutOffSyllable(word, true_syllabification = false) {
    const all_letters = [...word].reverse();
    for (let index = 0; index < all_letters.length; index++) {
        const letter = all_letters[index];
        if (resources_1.vowels.includes(letter.toLowerCase())) {
            let border = index;
            if (all_letters.slice(border).length > 1) {
                if (resources_1.diphtongs.includes(all_letters[border + 1] + letter) && true_syllabification) {
                    border += 1;
                }
                else if (resources_1.diphtongs.includes(all_letters[border + 1] + letter) &&
                    !['αη', 'οη', 'άη', 'όη', 'άι', 'αϊ', 'όι', 'οϊ'].includes(all_letters[border + 1] + letter) &&
                    !true_syllabification) {
                    border += 1;
                }
                if (all_letters.slice(border + 1).length > 0) {
                    if (true_syllabification) {
                        if (all_letters.slice(border + 1).length > 1 &&
                            resources_1.un_digraph_i.includes(all_letters[border + 2] + all_letters[border + 1])) {
                            border += 2;
                        }
                        else if (resources_1.un_single_i.includes(all_letters[border + 1]) &&
                            all_letters.slice(border + 1).length > 1 &&
                            !['ευ', 'εύ', 'αυ', 'αύ'].includes(all_letters[border + 2] + all_letters[border + 1])) {
                            border += 1;
                        }
                    }
                    let rest = all_letters.slice(border + 1);
                    let cons = '';
                    for (const lett of rest) {
                        if (!resources_1.vowels.includes(lett)) {
                            cons = lett + cons;
                            border += 1;
                        }
                        else {
                            if (cons.length > 1 && resources_1.valid_cons_cluster.includes(cons.slice(0, 2))) {
                                const difference = cons.length - 2;
                                border -= difference;
                            }
                            else if (cons.length > 1) {
                                border -= 1;
                            }
                            const result = all_letters.slice(border + 1).reverse().join('');
                            const syllable = all_letters.slice(0, border + 1).reverse().join('');
                            return [result, syllable];
                        }
                    }
                }
            }
        }
    }
    if (hasVowel(word)) {
        return [null, word];
    }
    return [word, null];
}
exports.cutOffSyllable = cutOffSyllable;
function divideIntoSyllables(word, syllables = [], true_syllabification = false) {
    const [rest, syllable] = cutOffSyllable(word, true_syllabification);
    if (syllable) {
        syllables.push(syllable);
    }
    if (rest && syllables.length > 0) {
        return divideIntoSyllables(rest, syllables, true_syllabification);
    }
    else if (rest && syllables.length === 0) {
        syllables.push(rest);
        return [null, syllables];
    }
    return [rest, syllables];
}
exports.divideIntoSyllables = divideIntoSyllables;
function modernGreekSyllabify(word, true_syllabification = true) {
    const [rest, syllables] = divideIntoSyllables(word, [], true_syllabification);
    return syllables.reverse();
}
exports.modernGreekSyllabify = modernGreekSyllabify;
function hasVowel(word) {
    for (const letter of word) {
        if (resources_1.vowels.includes(letter.toLowerCase())) {
            return true;
        }
    }
    return false;
}
exports.hasVowel = hasVowel;
function countSyllables(word, true_syllabification = true) {
    const syllables = modernGreekSyllabify(word, true_syllabification);
    return syllables.length;
}
exports.countSyllables = countSyllables;
