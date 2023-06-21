const { remove_all_diacritics } = require('./accentuation');
const { modern_greek_syllabify } = require('./syllabify');

const vowels = require('resources').vowels;
const ancient_tr = require('resources').ancient_tr;
const modern_tr = require('resources').modern_tr;
const { ROUGH } = require('resources')

const simple_transcription = function (word, h = null, modern = false) {
    const syllabified = modern_greek_syllabify(word, false);

    let transcr_meth = ancient_tr;
    if (modern) {
        transcr_meth = modern_tr;
    }

    const transcribed_syllables = [];

    for (let syllable of syllabified) {
        let s = syllable;
        syllable = remove_all_diacritics(syllable);
        let transcribed_syllable = '';
        while (true) {
            if (transcr_meth['digraphs'].hasOwnProperty(syllable.slice(0, 2).toLowerCase())) {
                const transcription = transcr_meth['digraphs'][syllable.slice(0, 2).toLowerCase()];
                transcribed_syllable += transcription;
                syllable = syllable.slice(2);
            } else if (transcr_meth['vowels'].hasOwnProperty(syllable[0].toLowerCase())) {
                const transcription = transcr_meth['vowels'][syllable[0].toLowerCase()];
                transcribed_syllable += transcription;
                if (h && !transcribed_syllable.includes('ch')) {
                    transcribed_syllable = transcribed_syllable.replace('h', h);
                }
                syllable = syllable.slice(1);
            } else if (transcr_meth['consonants'].hasOwnProperty(syllable[0].toLowerCase())) {
                const transcription = transcr_meth['consonants'][syllable[0].toLowerCase()];
                transcribed_syllable += transcription;
                syllable = syllable.slice(1);
            } else {
                transcribed_syllable += syllable[0];
                syllable = syllable.slice(1);
            }

            if (syllable.length === 0) {
                if (modern) {
                    const replacements = {'ke': 'kie', 'che': 'chie', 'ghe': 'ghie'};
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

    transcribed_word = capitalize_or_upper_transcription(word, transcribed_word);

    return transcribed_word;
};

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const capitalize_or_upper_transcription = function (word, transcription) {
    if (capitalize(word) === word) {
        return capitalize(transcription);
    } else if (word.toUpperCase() === word) {
        return transcription.toUpperCase();
    } else {
        return transcription;
    }
};

const has_rough_breathing = function (word) {
    const decomposed = word[0].normalize("NFD");

    if (vowels.includes(decomposed[0].toLowerCase())) {
        if (decomposed.includes(ROUGH)) {
            return true;
        } else if (word.length > 1) {
            const decomposed_2 = word[1].normalize('NFD');
            if (decomposed_2.includes(ROUGH) && vowels.includes(decomposed_2)) {
                return true;
            }
        }
    }
    return false;
};

const erasmian_transcription = function (word) {
    let transcription = simple_transcription(word, 'e');
    if (has_rough_breathing(word)) {
        transcription = 'h' + transcription;
    }
    transcription = capitalize_or_upper_transcription(word, transcription);
    return transcription;
};

const modern_transcription = function (word) {
    let transcription = simple_transcription(word, null, true);

    if (transcription.includes('w')) {
        const ws = [...transcription.matchAll(/w/g)];
        for (const w of ws) {
            const index = w.index;
            if (transcription.length > index + 1) {
                if (['t', 'p', 'k', 's'].includes(transcription[index + 1]) || (transcription.length > index + 3 && transcription.slice(index + 1, index + 3) === 'ch')) {
                    transcription = transcription.slice(0, index) + 'f' + transcription.slice(index + 1);
                }
            } else {
                transcription = [...transcription];
                transcription[index] = 'f';
                transcription = transcription.join('');
            }
        }
    }
    return transcription;
};
