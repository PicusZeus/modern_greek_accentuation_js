"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAccentOnTheAntepenultimate = exports.putAccentOnThePenultimate = exports.putAccentOnTheUltimate = exports.putAccent = exports.whereIsAccent = exports.putAccentOnSyllable = exports.putAccentOnVowel = exports.isAccented = exports.convertToMonotonic = exports.remove = void 0;
const syllabify_1 = require("./syllabify");
const resources_1 = require("./resources");
const remove_diacritics = (...diacritics) => {
    return function (text, diaeresis = true) {
        if (diaeresis) {
            const dieresis_dipht = {
                'όι': 'οϊ',
                'άι': 'αϊ',
                'έι': 'εϊ',
                'ύι': 'υϊ',
                'όυ': 'οϋ',
            };
            for (const [key, value] of Object.entries(dieresis_dipht)) {
                if (text.includes(key)) {
                    text = text.replace(key, value);
                }
            }
        }
        return [...text.normalize('NFD')]
            .filter((ch) => !diacritics.includes(ch))
            .join('')
            .normalize('NFC');
    };
};
const removeAccentsAndDiacritics = remove_diacritics(...resources_1.accents, ...resources_1.diacritics);
const removeAccentsAndDiacriticsWithDiaeresis = remove_diacritics(...resources_1.accents, ...resources_1.diacritics, resources_1.DIAERESIS);
const removeDiacriticsWithoutDiaeresis = remove_diacritics(...resources_1.diacritics);
const removeDiaeresis = remove_diacritics(resources_1.DIAERESIS);
const removeRedundantDiaeresis = (word) => {
    const redundant_diaereseis = {
        'όϊ': 'όι',
        'όϋ': 'όυ',
        'άϋ': 'άυ',
        'έϊ': 'έι',
    };
    if (word.normalize('NFD').includes(resources_1.DIAERESIS)) {
        for (const [redundant_diaeresis, replacement] of Object.entries(redundant_diaereseis)) {
            if (word.includes(redundant_diaeresis)) {
                word = word.replaceAll(redundant_diaeresis, replacement);
                break;
            }
        }
    }
    return word;
};
exports.remove = {
    removeDiacriticsWithoutDiaeresis,
    removeAccentsAndDiacritics,
    removeAccentsAndDiacriticsWithDiaeresis,
    removeDiaeresis,
    removeRedundantDiaeresis,
};
const convertToMonotonic = (sentence_or_word, one_syllable_rule = true) => {
    let _sentence_or_word = removeDiacriticsWithoutDiaeresis(sentence_or_word);
    console.log(_sentence_or_word, 'inside');
    _sentence_or_word = _sentence_or_word.normalize('NFD');
    const polytonic_accent = [resources_1.VARIA, resources_1.PERISPOMENI];
    for (const accent of polytonic_accent) {
        if (_sentence_or_word.includes(accent)) {
            _sentence_or_word = _sentence_or_word.replaceAll(accent, resources_1.OXIA);
        }
    }
    _sentence_or_word = _sentence_or_word.normalize('NFC');
    const words = _sentence_or_word.split(' ');
    const removed_one_syllable_accent = [];
    let excluded = ['ή'];
    if (_sentence_or_word.endsWith(';')) {
        excluded = ['ή', 'πού', 'πώς'];
    }
    for (const word of words) {
        if (one_syllable_rule) {
            if ((0, syllabify_1.countSyllables)(word) === 1 && !excluded.includes(word)) {
                removed_one_syllable_accent.push(removeAccentsAndDiacritics(word));
            }
            else {
                removed_one_syllable_accent.push(word);
            }
        }
        else {
            return words.join(' ');
        }
    }
    return removed_one_syllable_accent.join(' ');
};
exports.convertToMonotonic = convertToMonotonic;
const isAccented = (syllable) => {
    for (const ch of syllable.normalize('NFD')) {
        if (resources_1.accents.includes(ch)) {
            return true;
        }
    }
    return false;
};
exports.isAccented = isAccented;
const putAccentOnVowel = (vowel) => {
    vowel = removeAccentsAndDiacritics(vowel);
    if (!resources_1.vowels.includes(vowel)) {
        return vowel;
    }
    return (vowel + resources_1.OXIA).normalize('NFC');
};
exports.putAccentOnVowel = putAccentOnVowel;
const putAccentOnSyllable = (syllable) => {
    for (const def_diph of resources_1.list_of_def_diphthongs) {
        if (syllable.includes(def_diph)) {
            const accented_def_diph = def_diph.slice(0, -1) + (0, exports.putAccentOnSyllable)(def_diph.slice(-1));
            syllable = syllable.replaceAll(def_diph, accented_def_diph);
            return syllable;
        }
    }
    for (const diph of resources_1.diphtongs) {
        if (syllable.includes(diph)) {
            const accented_diphtong = diph[0] + (0, exports.putAccentOnVowel)(diph[1]);
            syllable = syllable.replaceAll(diph, accented_diphtong);
            return syllable;
        }
    }
    for (const vow of resources_1.vowels) {
        if (syllable.includes(vow)) {
            syllable = syllable.replaceAll(vow, (0, exports.putAccentOnVowel)(vow));
            return syllable;
        }
    }
    syllable = removeRedundantDiaeresis(syllable);
    return syllable;
};
exports.putAccentOnSyllable = putAccentOnSyllable;
const whereIsAccent = (word, true_syllabification = true) => {
    const syllables = (0, syllabify_1.modernGreekSyllabify)(word, true_syllabification);
    const reversedSyllables = syllables.reverse();
    for (let index = 0; index < reversedSyllables.length; index++) {
        const syllable = reversedSyllables[index];
        for (const ch of syllable.normalize('NFD')) {
            if (resources_1.accents.includes(ch)) {
                if (index === 0) {
                    return 'ULTIMATE';
                }
                else if (index === 1) {
                    return 'PENULTIMATE';
                }
                else if (index === 2) {
                    return 'ANTEPENULTIMATE';
                }
                else {
                    return 'INCORRECT_ACCENT';
                }
            }
        }
    }
    return null;
};
exports.whereIsAccent = whereIsAccent;
const putAccent = (word, accent_name, true_syllabification = true) => {
    word = removeAccentsAndDiacritics(word);
    if (accent_name === 'ULTIMATE') {
        return (0, exports.putAccentOnTheUltimate)(word);
    }
    else if (accent_name === 'PENULTIMATE') {
        return (0, exports.putAccentOnThePenultimate)(word, true_syllabification);
    }
    else if (accent_name === 'ANTEPENULTIMATE') {
        return (0, exports.putAccentOnTheAntepenultimate)(word, true_syllabification);
    }
    else {
        return word;
    }
};
exports.putAccent = putAccent;
const putAccentOnTheUltimate = (word, accent_one_syllable = true, second_accent = false) => {
    word = removeAccentsAndDiacritics(word);
    const syllables = (0, syllabify_1.modernGreekSyllabify)(word);
    if (!accent_one_syllable && syllables.length < 2) {
        return removeAccentsAndDiacritics(word);
    }
    const to_be_accented = syllables[syllables.length - 1];
    const accented = (0, exports.putAccentOnSyllable)(to_be_accented);
    if (accented) {
        syllables[syllables.length - 1] = accented;
        return syllables.join('');
    }
    else {
        return null;
    }
};
exports.putAccentOnTheUltimate = putAccentOnTheUltimate;
const putAccentOnThePenultimate = (word, true_syllabification = true) => {
    word = removeAccentsAndDiacritics(word);
    const syllables = (0, syllabify_1.modernGreekSyllabify)(word, true_syllabification);
    if (syllables.length > 1) {
        const to_be_accented = syllables[syllables.length - 2];
        syllables[syllables.length - 2] = (0, exports.putAccentOnSyllable)(to_be_accented);
        let res = syllables.join('');
        res = removeRedundantDiaeresis(res);
        return res;
    }
    else {
        return word;
    }
};
exports.putAccentOnThePenultimate = putAccentOnThePenultimate;
const putAccentOnTheAntepenultimate = (word, true_syllabification = true) => {
    word = removeAccentsAndDiacritics(word);
    const syllables = (0, syllabify_1.modernGreekSyllabify)(word, true_syllabification);
    if (syllables.length > 2) {
        const to_be_accented = syllables[syllables.length - 3];
        syllables[syllables.length - 3] = (0, exports.putAccentOnSyllable)(to_be_accented);
        let res = syllables.join('');
        res = removeRedundantDiaeresis(res);
        return res;
    }
    else {
        return (0, exports.putAccentOnThePenultimate)(word);
    }
};
exports.putAccentOnTheAntepenultimate = putAccentOnTheAntepenultimate;
