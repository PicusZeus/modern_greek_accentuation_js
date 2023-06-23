
const PSILI = "\u0313"
const DASIA = "\u0314"
const OXIA  = "\u0301"
const VARIA  = "\u0300"
const PERISPOMENI = "\u0342"
const YPOGEGRAMMENI = "\u0345"
const DIAERESIS = "\u0308"
exports.DIAERESIS = DIAERESIS
exports.VARIA = VARIA
exports.PERISPOMENI = PERISPOMENI
exports.OXIA = OXIA
exports.DASIA = DASIA
exports.accents = [
    OXIA, VARIA, PERISPOMENI]
exports.diacritics = [PSILI, DASIA, YPOGEGRAMMENI]

const ANTEPENULTIMATE = 'antepenultimate'
const PENULTIMATE = 'penultimate'
const ULTIMATE = 'ultimate'
const INCORRECT_ACCENT = 'incorrect_accent'

// const vowels_dict = {'ά': 'α', 'έ': 'ε', 'ί': 'ι', 'ύ': 'υ', 'ό': 'ο', 'ώ': 'ω', 'ή': 'η', 'ΐ': 'ϊ', 'ΰ': 'ϋ'}
//
// const vowels_accented = ['ά', 'έ', 'ί', 'ύ', 'ό', 'ώ', 'ή', 'ΐ', 'ΰ']
//
// const vowels_unaccented = ['α', 'ε', 'ι', 'υ', 'ο', 'ω', 'η', 'ϊ', 'ϋ']

const vowels = ['ά', 'Ά', 'α', 'έ', 'ε', 'ί', 'ι', 'ύ', 'υ', 'ό', 'ο', 'ώ', 'ω', 'ή', 'η', 'ΐ', 'ϊ', 'ΰ', 'ϋ', 'Ά', 'Α', 'Έ',
          'Ε', 'Ί', 'Ι', 'Ύ', 'Υ', 'Ό', 'Ο', 'Ώ', 'Ω', 'Ή', 'Η', 'Ϊ́', 'Ϊ', 'Ϋ́', 'Ϋ']

exports.vowels = vowels

const un_single_i = ['ι', 'η', 'υ', 'ϊ']

exports.un_single_i = un_single_i

const un_digraph_i = ['οι', 'ει', 'υι']

exports.un_digraph_i = un_digraph_i

const valid_cons_cluster = ['στ', 'χρ', 'μπ', 'ντ', 'χτ', 'χθ', 'γδ']

exports.valid_cons_cluster = valid_cons_cluster
//
// const diphtongs_dict = {'αύ': 'αυ', 'εύ': 'ευ', 'εί': 'ει', 'οί': 'οι', 'υί': 'υι', 'ού': 'ου', 'άη': 'αη', 'όη': 'οη',
//                   'άι': 'αϊ', 'όι': 'οϊ', 'αί': 'αι'}

const diphtongs = ['αύ',
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
             'Αι']

exports.diphtongs = diphtongs

const vowels_anc_transcription = {'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'u', 'ο': 'o', 'ω': 'o',
                            'η': 'h', 'ϊ': 'i', 'ϋ': 'u'}



const vowels_mod_transcription = {'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'i', 'ο': 'o', 'ω': 'o', 'η': 'i',
                            'ϊ': 'i', 'ϋ': 'i'}

const consonants_anc_transcription = {'β': 'b', 'γ': 'g', 'δ': 'd', 'θ': 'th', 'ζ': 'z', 'λ': 'l', 'κ': 'k',
                                'μ': 'm', 'ν': 'n', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f',
                                'ψ': 'ps', 'ξ': 'ks', 'χ': 'ch'}

const consonants_mod_transcription = {'β': 'w', 'γ': 'gh', 'δ': 'dh', 'θ': 'th', 'λ': 'l', 'μ': 'm', 'ν': 'n',
                                'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f', 'ψ': 'ps', 'ξ': 'ks',
                                'χ': 'ch', 'κ': 'k'}

const digraphs_anc_transcirption = {'αυ': 'au', 'ευ': 'eu', 'γγ': 'ng', 'γκ': 'nk', 'γχ': 'nch', 'ου': 'ou'}

const digraphs_mod_transciption = {'αυ': 'aw', 'ευ': 'ew', 'γγ': 'ng', 'γκ': 'ng', 'γχ': 'nch',
                             'ου': 'u', 'αι': 'e', 'οι': 'i', 'ει': 'i', 'υι': 'i', 'ηυ': 'iw'}

const ancient_tr = {'vowels': vowels_anc_transcription,
              'consonants': consonants_anc_transcription,
              'digraphs': digraphs_anc_transcirption}

exports.ancient_tr = ancient_tr

const modern_tr = {'vowels': vowels_mod_transcription,
             'consonants': consonants_mod_transcription,
             'digraphs': digraphs_mod_transciption}

exports.modern_tr = modern_tr

const list_of_def_diphthongs = ['ειευ', 'οιευ', 'ιευ', 'ειαυ', 'οιαυ', 'ιαυ', 'ιου', 'οιου', 'ειου', 'υου', 'οια', 'οιε',
                          'οιι', 'οιυ', 'οιο', 'οιω', 'οιη', 'εια', 'ειε', 'ειι', 'ειυ', 'ειο', 'ειω', 'ειη', 'υια',
                          'υιε', 'υιι', 'υιυ', 'υιο', 'υιω', 'υιη', 'ια', 'ιε', 'ιι', 'ιυ', 'ιο', 'ιω', 'ιη', 'ηα',
                          'ηε', 'ηι', 'ηυ', 'ηο', 'ηω', 'ηη', 'ηϊ', 'ηϋ', 'υα', 'υε', 'υι', 'υυ', 'υο', 'υω', 'υη']

exports.list_of_def_diphthongs = list_of_def_diphthongs
// # these prefixes change themselves or stem by esoteric augmentation
// # I probably should change this model into key - augmented prefix, value -
// # unaugmented, because for one augmented there are sometimes more than one
// # unaugmented forms (para: pare, or parh)
// const dict_of_augmented_prefixes = {'ανα': 'ανε', 'δια': 'διε', 'εκ': 'εξε', 'συν': 'συνε', 'απο': 'απε', 'προ': 'προε',
//                               'κατευ': 'κατηυ', 'παρα': 'παρη', 'παρα ': 'παρε', 'προεξ': 'προεξε', 'ενδια': 'ενδιε',
//                               'περι': 'περιε', 'υπα': 'υπη', 'εν': 'ενε', 'υπο': 'υπε', 'αμφι': 'αμφε', 'συμ': 'συνε',
//                               'επιπαρα ': 'παρεεπε', 'κατα': 'κατε', 'εισ': 'εισε', 'αντι': 'αντε', 'παρεμ': 'περενε',
//                               'επι': 'επε', 'μετα': 'μετε', 'προσ': 'προσε', 'ανα ': 'ανη', 'συνα': 'συνη',
//                               'απα': 'απη', 'αντικατα': 'αντικατε', 'υποκατα': 'υποκατε', 'αποκατα': 'αποκατε',
//                               'περια': 'περιη', 'ενα': 'ενη', 'κατα ': 'κατη', 'εισα': 'ειση', 'επα': 'επη',
//                               'επανεγκατα': 'επανεγκατε', 'μετεγκατα': 'μετεγκατε', 'απεγκατα': 'απεγκατε',
//                               'ανασυν': 'ανασυνε', 'αντιπαρα': 'αντιπαρε',
//                               'μετα ': 'μετη',
//                               'προσα': 'προση'
//                               }
//
// // # these prefixes do not merge with verbs at all - there are more, add them in the future
// const prefixes_list_that_allow_augmentaion = ['πολυ', 'παρα', 'καλα', 'κουτσο', 'ξανα']
//
// // # for automatic augmentation of regular stems
// const prefixes_before_augment = {'ανα': 'αν', 'διακατ': 'διακατ', 'αν': 'αν', 'δια': 'δι', 'δι': 'δι', 'εκ': 'εξ',
//                            'συλ': 'συν', 'εμπερι': 'εμπερι', 'επανεξ': 'επανεξ', 'επανεκ': 'επανεξ',
//                            'απο': 'απ', 'κακο': 'κακο', 'καλο': 'καλο', 'αντικατα': 'αντικατ',
//                            'απ': 'απ', 'προ': 'προ', 'κατα': 'κατ', 'κατ': 'κατ', 'παρα': 'παρα', ' παρα': 'παρ',
//                            'παρ': 'παρ', 'προσ': 'προσ', 'μετα': 'μετ', 'μετ': 'μετ', 'υποκατα': 'υποκατ', 'αποκατα': 'αποκατ',
//                            'επανεγκατα': 'επανεγκατ', 'μετεγκατα':'μετεγκατ', 'απεγκατα': 'απεγκατ', 'ανασυν': 'ανασυν',
//                            'προεκ': 'προεξ', 'ενδια': 'ενδι', 'ενδι': 'ενδι', 'περι': 'περι', 'υπο': 'υπ',
//                            'υπ': 'υπ', 'αμφι': 'αμφ', 'επι': 'επ', 'επ': 'επ', 'εισ': 'εισ', 'συμ': 'συν',
//                            'συγ': 'συν', 'συ': 'συν', 'συν': 'συν', 'ελ': 'εξ', 'πολυ': 'πολυ', 'αντιπαρα': 'αντιπαρ',
//                            'επεμ': 'επεν', 'υπερ': 'υπερ', 'προεξ': 'προεξ', 'αυτοκατα': 'αυτοκατ', 'συγκατα': 'συγκατ',
//                            'επεν': 'επεν', 'επεγ': 'επεν', 'παρεμ': 'παρεν', 'παρεν': 'παρεν', 'παρεγ': 'παρεν',
//                            'εν': 'εν', 'εμ': 'εν', 'εγ': 'εν', 'εγκατα': 'εγκατ', 'υφ': 'υφ',
//                            'καλα': 'καλα', 'κουτσο': 'κουτσο', 'ξανα': 'ξανα', 'εξ': 'εξ', 'συμμετ': 'συμμετ',
//                            'ξε': 'ξε', 'επανα': 'επαν', 'επαν': 'επαν', 'αντι': 'αντ', 'αντ': 'αντ',
//                            '': ''}




