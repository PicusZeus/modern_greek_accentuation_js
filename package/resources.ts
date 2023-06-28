
export const PSILI = "\u0313"
export const DASIA = "\u0314"
export const OXIA  = "\u0301"
export const VARIA  = "\u0300"
export const PERISPOMENI = "\u0342"
export const YPOGEGRAMMENI = "\u0345"
export const DIAERESIS = "\u0308"

export const accents = [
    OXIA, VARIA, PERISPOMENI]
export const diacritics = [PSILI, DASIA, YPOGEGRAMMENI]

const ANTEPENULTIMATE = 'antepenultimate'
const PENULTIMATE = 'penultimate'
const ULTIMATE = 'ultimate'
const INCORRECT_ACCENT = 'incorrect_accent'



export const vowels = ['ά', 'Ά', 'α', 'έ', 'ε', 'ί', 'ι', 'ύ', 'υ', 'ό', 'ο', 'ώ', 'ω', 'ή', 'η', 'ΐ', 'ϊ', 'ΰ', 'ϋ', 'Ά', 'Α', 'Έ',
          'Ε', 'Ί', 'Ι', 'Ύ', 'Υ', 'Ό', 'Ο', 'Ώ', 'Ω', 'Ή', 'Η', 'Ϊ́', 'Ϊ', 'Ϋ́', 'Ϋ']


export const un_single_i = ['ι', 'η', 'υ', 'ϊ']


export const un_digraph_i = ['οι', 'ει', 'υι']


export const valid_cons_cluster = ['στ', 'χρ', 'μπ', 'ντ', 'χτ', 'χθ', 'γδ']


export const diphtongs = ['αύ',
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


const vowels_anc_transcription = {'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'u', 'ο': 'o', 'ω': 'o',
                            'η': 'h', 'ϊ': 'i', 'ϋ': 'u'}



const vowels_mod_transcription = {'α': 'a', 'ε': 'e', 'ι': 'i', 'υ': 'i', 'ο': 'o', 'ω': 'o', 'η': 'i',
                            'ϊ': 'i', 'ϋ': 'i', 'ζ': 'z'}

const consonants_anc_transcription = {'β': 'b', 'γ': 'g', 'δ': 'd', 'θ': 'th', 'ζ': 'z', 'λ': 'l', 'κ': 'k',
                                'μ': 'm', 'ν': 'n', 'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f',
                                'ψ': 'ps', 'ξ': 'ks', 'χ': 'ch'}

const consonants_mod_transcription = {'β': 'w', 'γ': 'gh', 'δ': 'dh', 'θ': 'th', 'λ': 'l', 'μ': 'm', 'ν': 'n',
                                'π': 'p', 'ρ': 'r', 'σ': 's', 'ς': 's', 'τ': 't', 'φ': 'f', 'ψ': 'ps', 'ξ': 'ks',
                                'χ': 'ch', 'κ': 'k', 'ζ': 'z'}

const digraphs_anc_transcirption = {'αυ': 'au', 'ευ': 'eu', 'γγ': 'ng', 'γκ': 'nk', 'γχ': 'nch', 'ου': 'ou'}

const digraphs_mod_transciption = {'αυ': 'aw', 'ευ': 'ew', 'γγ': 'ng', 'γκ': 'ng', 'γχ': 'nch',
                             'ου': 'u', 'αι': 'e', 'οι': 'i', 'ει': 'i', 'υι': 'i', 'ηυ': 'iw'}

export const ancient_tr = {'vowels': vowels_anc_transcription,
              'consonants': consonants_anc_transcription,
              'digraphs': digraphs_anc_transcirption}


export const modern_tr = {'vowels': vowels_mod_transcription,
             'consonants': consonants_mod_transcription,
             'digraphs': digraphs_mod_transciption}


export const list_of_def_diphthongs = ['ειευ', 'οιευ', 'ιευ', 'ειαυ', 'οιαυ', 'ιαυ', 'ιου', 'οιου', 'ειου', 'υου', 'οια', 'οιε',
                          'οιι', 'οιυ', 'οιο', 'οιω', 'οιη', 'εια', 'ειε', 'ειι', 'ειυ', 'ειο', 'ειω', 'ειη', 'υια',
                          'υιε', 'υιι', 'υιυ', 'υιο', 'υιω', 'υιη', 'ια', 'ιε', 'ιι', 'ιυ', 'ιο', 'ιω', 'ιη', 'ηα',
                          'ηε', 'ηι', 'ηυ', 'ηο', 'ηω', 'ηη', 'ηϊ', 'ηϋ', 'υα', 'υε', 'υι', 'υυ', 'υο', 'υω', 'υη']


