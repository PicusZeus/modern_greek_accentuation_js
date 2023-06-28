"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list_of_def_diphthongs = exports.modern_tr = exports.ancient_tr = exports.diphtongs = exports.valid_cons_cluster = exports.un_digraph_i = exports.un_single_i = exports.vowels = exports.diacritics = exports.accents = exports.DIAERESIS = exports.YPOGEGRAMMENI = exports.PERISPOMENI = exports.VARIA = exports.OXIA = exports.DASIA = exports.PSILI = void 0;
exports.PSILI = "\u0313";
exports.DASIA = "\u0314";
exports.OXIA = "\u0301";
exports.VARIA = "\u0300";
exports.PERISPOMENI = "\u0342";
exports.YPOGEGRAMMENI = "\u0345";
exports.DIAERESIS = "\u0308";
exports.accents = [
    exports.OXIA, exports.VARIA, exports.PERISPOMENI
];
exports.diacritics = [exports.PSILI, exports.DASIA, exports.YPOGEGRAMMENI];
const ANTEPENULTIMATE = 'antepenultimate';
const PENULTIMATE = 'penultimate';
const ULTIMATE = 'ultimate';
const INCORRECT_ACCENT = 'incorrect_accent';
exports.vowels = ['ά', 'Ά', 'α', 'έ', 'ε', 'ί', 'ι', 'ύ', 'υ', 'ό', 'ο', 'ώ', 'ω', 'ή', 'η', 'ΐ', 'ϊ', 'ΰ', 'ϋ', 'Ά', 'Α', 'Έ',
    'Ε', 'Ί', 'Ι', 'Ύ', 'Υ', 'Ό', 'Ο', 'Ώ', 'Ω', 'Ή', 'Η', 'Ϊ́', 'Ϊ', 'Ϋ́', 'Ϋ'];
exports.un_single_i = ['ι', 'η', 'υ', 'ϊ'];
exports.un_digraph_i = ['οι', 'ει', 'υι'];
exports.valid_cons_cluster = ['στ', 'χρ', 'μπ', 'ντ', 'χτ', 'χθ', 'γδ'];
exports.diphtongs = ['αύ',
    'αυ',
    'εύ',
    'ευ',
    'εί',
    'ει',
    'οί',
    'οι',
    'υί',
    'υι',
    'ού',
    'ου',
    'άη',
    'αη',
    'όη',
    'οη',
    'άι',
    'αϊ',
    'όι',
    'οϊ',
    'αί',
    'αι',
    'ΑΎ',
    'ΑΥ',
    'ΕΎ',
    'ΕΥ',
    'ΕΊ',
    'ΕΙ',
    'ΟΊ',
    'ΟΙ',
    'ΥΊ',
    'ΥΙ',
    'ΟΎ',
    'ΟΥ',
    'ΆΗ',
    'ΑΗ',
    'ΌΗ',
    'ΟΗ',
    'ΆΙ',
    'ΑΪ',
    'ΌΙ',
    'ΟΪ',
    'ΑΊ',
    'ΑΙ',
    'Αύ',
    'Αυ',
    'Εύ',
    'Ευ',
    'Εί',
    'Ει',
    'Οί',
    'Οι',
    'Υί',
    'Υι',
    'Ού',
    'Ου',
    'Άη',
    'Αη',
    'Όη',
    'Οη',
    'Άι',
    'Αϊ',
    'Όι',
    'Οϊ',
    'Αί',
    'Αι'];
const vowels_anc_transcription = { 'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'u', 'ο': 'o', 'ω': 'o',
    'η': 'h', 'ϊ': 'i', 'ϋ': 'u' };
const vowels_mod_transcription = { 'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'i', 'ο': 'o', 'ω': 'o', 'η': 'i',
    'ϊ': 'i', 'ϋ': 'i', 'ζ': 'z' };
const consonants_anc_transcription = { 'β': 'b', 'γ': 'g', 'δ': 'd', 'θ': 'th', 'ζ': 'z', 'λ': 'l', 'κ': 'k',
    'μ': 'm', 'ν': 'n', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f',
    'ψ': 'ps', 'ξ': 'ks', 'χ': 'ch' };
const consonants_mod_transcription = { 'β': 'w', 'γ': 'gh', 'δ': 'dh', 'θ': 'th', 'λ': 'l', 'μ': 'm', 'ν': 'n',
    'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f', 'ψ': 'ps', 'ξ': 'ks',
    'χ': 'ch', 'κ': 'k', 'ζ': 'z' };
const digraphs_anc_transcirption = { 'αυ': 'au', 'ευ': 'eu', 'γγ': 'ng', 'γκ': 'nk', 'γχ': 'nch', 'ου': 'ou' };
const digraphs_mod_transciption = { 'αυ': 'aw', 'ευ': 'ew', 'γγ': 'ng', 'γκ': 'ng', 'γχ': 'nch',
    'ου': 'u', 'αι': 'e', 'οι': 'i', 'ει': 'i', 'υι': 'i', 'ηυ': 'iw' };
exports.ancient_tr = { 'vowels': vowels_anc_transcription,
    'consonants': consonants_anc_transcription,
    'digraphs': digraphs_anc_transcirption };
exports.modern_tr = { 'vowels': vowels_mod_transcription,
    'consonants': consonants_mod_transcription,
    'digraphs': digraphs_mod_transciption };
exports.list_of_def_diphthongs = ['ειευ', 'οιευ', 'ιευ', 'ειαυ', 'οιαυ', 'ιαυ', 'ιου', 'οιου', 'ειου', 'υου', 'οια', 'οιε',
    'οιι', 'οιυ', 'οιο', 'οιω', 'οιη', 'εια', 'ειε', 'ειι', 'ειυ', 'ειο', 'ειω', 'ειη', 'υια',
    'υιε', 'υιι', 'υιυ', 'υιο', 'υιω', 'υιη', 'ια', 'ιε', 'ιι', 'ιυ', 'ιο', 'ιω', 'ιη', 'ηα',
    'ηε', 'ηι', 'ηυ', 'ηο', 'ηω', 'ηη', 'ηϊ', 'ηϋ', 'υα', 'υε', 'υι', 'υυ', 'υο', 'υω', 'υη'];
