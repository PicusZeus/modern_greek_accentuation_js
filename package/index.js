const {convertToMonotonic, whereIsAccent, putAccent, remove, putAccentOnTheAntepenultimate, putAccentOnThePenultimate, putAccentOnTheUltimate} = require("./accentuation")
const {modernGreekSyllabify} = require("./syllabify")
const {erasmianTranscription, simpleTranscription, modernTranscription} = require("./transcription")


const mga = {
    /**
     * Convert from polytonic to monotonic
     *
     * @method convertToMonotonic
     * @static
     * @param {String} sentence_or_word
     * @param {Boolean} one_syllable_rule, default true, that is removes accent from single syllable words with some exceptions.
     * @returns {String}
     */



    convertToMonotonic,
    /**
     * Removes all diacritics, in monotonic and polytonic script, but diaeresis stays or is restored
     *
     * @method sanitizeGreek
     * @static
     * @param {String} text
     * @param {Boolean} diaeresis, default true, if false, doesnt remove diaeresis, and even restores it if needed after removing an accent
     * @returns {String}
     *
     */

    sanitizeGreek: function (text, diaeresis=true) {
        if (diaeresis) {
            return remove.removeAccentsAndDiacriticsWithDiaeresis(text)
        } else {
            return remove.removeAccentsAndDiacritics(text)
        }
    },
    
    /**
     * Shows placement of an accent
     *
     * @method whereIsAccent
     * @static
     * @param {String} word
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {"PENULTIMATE" || "ULTIMATE" || "ANTEPENULTIMATE" || "INCORRECT_ACCENT" || null}
     */
    whereIsAccent,
    /**
     * Puts accent on a word ("PENULTIMATE", "ULTIMATE", "ANTEPENULTIMATE")
     *
     * @method putAccent
     * @static
     * @param {String} word
     * @param {"PENULTIMATE" || "ULTIMATE" || "ANTEPENULTIMATE"} accent_name it has to be "PENULTIMATE" or "ULTIMATE" or "ANTEPENULTIMATE"
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {String}
     * */

    putAccent,

    /**
     * Puts accent on the antepenultimate syllable, the same as putAccent(word, "ANTEPENULTIMATE")
     * 
     * @method putAccentOnTheAntepenultimate
     * @static
     * @param {String} word
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {String}
     */


    putAccentOnTheAntepenultimate,

    /**
     * Puts accent on the penultimate syllable, the same as putAccent(word, "PENULTIMATE")
     * 
     * @method putAccentOnThePenultimate
     * @static
     * @param {String} word
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {String}
     */

    putAccentOnThePenultimate,

    /**
     * Puts accent on the ultimate syllable, the same as putAccent(word, "ULTIMATE")
     * 
     * @method putAccentOnTheUltimate
     * @static
     * @param {String} word
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {String}
     */

    putAccentOnTheUltimate,



    /**
     * Divide word into syllables
     *
     * @method modernGreekSyllabify
     * @static
     * @param {string} word
     * @param {Boolean} true_syllabification, default true, that is treats "i" sound after consonants not as a vowel. If false, all "i" sounds treated as vowels.
     * @returns {Array} array with syllables
     */

    modernGreekSyllabify,

    /**
     * Transcription according to erasmian (simplified) pronunciation.
     *
     * @method erasmianTranscription
     * @static
     * @param {String} text
     * @returns {String}
     */

    erasmianTranscription,

    /**
     * Simplified transcription into latin alphabet, similar to Erasmian, but evaluats η to h.
     * 
     * @method simpleTranscription
     * @static
     * @param {String} text
     * @returns {String}
     */

    simpleTranscription,

    /**
     * Phonetic simplified transcription
     *
     * @method modernTranscription
     * @static
     * @param {String} word
     * @returns {String}
     */


    modernTranscription


}

module.exports = mga;