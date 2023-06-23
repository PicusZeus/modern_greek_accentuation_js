const {modernGreekSyllabify, countSyllables} = require('./syllabify');
const {
    accents, DIAERESIS, OXIA, VARIA, PERISPOMENI,
    diacritics, vowels, list_of_def_diphthongs, diphtongs
} = require("./resources");


const remove_diacritics = function (...diacritics) {
    return function (text, diaeresis = true) {

        if (diaeresis) {
            const dieresis_dipht = {'όι': 'οϊ', 'άι': 'αϊ', 'έι': 'εϊ', 'ύι': 'υϊ', 'όυ': 'οϋ'};
            for (const d of Object.keys(dieresis_dipht)) {
                if (text.includes(d)) {
                    text = text.replace(d, dieresis_dipht[d]);
                }
            }
        }
        return [...text.normalize("NFD")].filter(ch => !diacritics.includes(ch)).join('').normalize("NFC");
    };
};

const removeAccentsAndDiacritics = remove_diacritics(...accents, ...diacritics);
const removeAccentsAndDiacriticsWithDiaeresis = remove_diacritics(...accents, ...diacritics, DIAERESIS);
const removeDiacriticsWithoutDiaeresis = remove_diacritics(...diacritics);
const removeDiaeresis = remove_diacritics(DIAERESIS);

const removeRedundantDiaeresis = function (word) {
    const redundant_diaereseis = {'όϊ': 'όι', 'όϋ': 'όυ', 'άϋ': 'άυ', 'έϊ': 'έι'};
    if (word.normalize('NFD').includes(DIAERESIS)) {
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
    removeDiacriticsWithoutDiaeresis, removeAccentsAndDiacritics,
    removeAccentsAndDiacriticsWithDiaeresis, removeDiaeresis, removeRedundantDiaeresis
}
const convertToMonotonic = function (sentence_or_word, one_syllable_rule = true) {
    let _sentence_or_word = removeDiacriticsWithoutDiaeresis(sentence_or_word);
    console.log(_sentence_or_word, 'inside')
    _sentence_or_word = _sentence_or_word.normalize("NFD");
    const polytonic_accent = [VARIA, PERISPOMENI];
    for (const accent of polytonic_accent) {
        if (_sentence_or_word.includes(accent)) {
            _sentence_or_word = _sentence_or_word.replaceAll(accent, OXIA);
        }
    }
    _sentence_or_word = _sentence_or_word.normalize("NFC");
    const words = _sentence_or_word.split(" ");
    const removed_one_syllable_accent = [];
    let excluded = ['ή'];
    if (_sentence_or_word.endsWith(";")) {
        excluded = ['ή', 'πού', 'πώς'];
    }
    for (const word of words) {
        if (one_syllable_rule) {
            if (countSyllables(word) === 1 && !excluded.includes(word)) {
                removed_one_syllable_accent.push(removeAccentsAndDiacritics(word));
            } else {
                removed_one_syllable_accent.push(word);
            }
        } else {
            return words.join(" ");
        }
    }
    return removed_one_syllable_accent.join(" ");
};

exports.convertToMonotonic = convertToMonotonic

const isAccented = function (syllable) {
    for (const ch of syllable.normalize("NFD")) {
        if (accents.includes(ch)) {
            return true;
        }
    }
    return false;
};

exports.isAccented = isAccented

const putAccentOnVowel = function (vowel) {
    vowel = removeAccentsAndDiacritics(vowel);
    if (!vowels.includes(vowel)) {
        return vowel;
    }
    return (vowel + OXIA).normalize("NFC");
};

exports.putAccentOnVowel = putAccentOnVowel

const putAccentOnSyllable = function (syllable) {
    for (const def_diph of list_of_def_diphthongs) {
        if (syllable.includes(def_diph)) {
            const accented_def_diph = def_diph.slice(0, -1) + putAccentOnSyllable(def_diph.slice(-1));
            syllable = syllable.replaceAll(def_diph, accented_def_diph);
            return syllable;
        }
    }
    for (const diph of diphtongs) {
        if (syllable.includes(diph)) {
            const accented_diphtong = diph[0] + putAccentOnVowel(diph[1]);
            syllable = syllable.replaceAll(diph, accented_diphtong);
            return syllable;
        }
    }
    for (const vow of vowels) {

        if (syllable.includes(vow)) {

            syllable = syllable.replaceAll(vow, putAccentOnVowel(vow));

            return syllable;
        }
    }
    syllable = removeRedundantDiaeresis(syllable);
    return syllable;
};

exports.putAccentOnSyllable = putAccentOnSyllable

const whereIsAccent = function (word, true_syllabification = true) {
    const syllables = modernGreekSyllabify(word, true_syllabification);
    const reversedSyllables = syllables.reverse();
    for (let index = 0; index < reversedSyllables.length; index++) {
        const syllable = reversedSyllables[index];
        for (const ch of syllable.normalize("NFD")) {
            if (accents.includes(ch)) {
                if (index === 0) {
                    return 'ULTIMATE';
                } else if (index === 1) {
                    return 'PENULTIMATE';
                } else if (index === 2) {
                    return 'ANTEPENULTIMATE';
                } else {
                    return 'INCORRECT_ACCENT';
                }
            }
        }
    }
    return null;
};

exports.whereIsAccent = whereIsAccent

const putAccent = function (word, accent_name, true_syllabification = true) {
    word = removeAccentsAndDiacritics(word);
    if (accent_name === 'ULTIMATE') {
        return put_accent_on_the_ultimate(word);
    } else if (accent_name === 'PENULTIMATE') {
        return put_accent_on_the_penultimate(word, true_syllabification);
    } else if (accent_name === 'ANTEPENULTIMATE') {
        return put_accent_on_the_antepenultimate(word, true_syllabification);
    } else {
        return word;
    }
};

exports.putAccent = putAccent


const put_accent_on_the_ultimate = function (word, accent_one_syllable = true, second_accent = false) {
    word = removeAccentsAndDiacritics(word);
    const syllables = modernGreekSyllabify(word);
    if (!accent_one_syllable && syllables.length < 2) {
        return removeAccentsAndDiacritics(word);
    }
    const to_be_accented = syllables[syllables.length - 1];
    const accented = putAccentOnSyllable(to_be_accented);
    if (accented) {
        syllables[syllables.length - 1] = accented;
        return syllables.join('');
    } else {
        return null;
    }
};

exports.putAccentOnTheUltimate = put_accent_on_the_ultimate

const put_accent_on_the_penultimate = function (word, true_syllabification = true) {
    word = removeAccentsAndDiacritics(word);
    const syllables = modernGreekSyllabify(word, true_syllabification);
    if (syllables.length > 1) {
        const to_be_accented = syllables[syllables.length - 2];
        syllables[syllables.length - 2] = putAccentOnSyllable(to_be_accented);
        let res = syllables.join('');
        res = removeRedundantDiaeresis(res);
        return res;
    } else {
        return word;
    }
};

exports.putAccentOnThePenultimate = put_accent_on_the_penultimate

const put_accent_on_the_antepenultimate = function (word, true_syllabification = true) {
    word = removeAccentsAndDiacritics(word);

    const syllables = modernGreekSyllabify(word, true_syllabification);

    if (syllables.length > 2) {
        const to_be_accented = syllables[syllables.length - 3];
        syllables[syllables.length - 3] = putAccentOnSyllable(to_be_accented);

        let res = syllables.join('');
        res = removeRedundantDiaeresis(res);
        return res;
    } else {
        return put_accent_on_the_penultimate(word);
    }
};

exports.putAccentOnTheAntepenultimate = put_accent_on_the_antepenultimate

