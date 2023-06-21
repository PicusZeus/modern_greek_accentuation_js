// const { modern_transcription } = require("./transcription")
// const { alfa } = require("./imp")
const alfa = require("./imp")
const { PSILI } = require("./resources")
const { put_accent_on_the_antepenultimate } = require("./accentuation")

const a = put_accent_on_the_antepenultimate('διαγράφω')
console.log(a, 'alfa')