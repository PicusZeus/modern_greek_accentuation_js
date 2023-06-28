import {
    modernGreekSyllabify,
    countSyllables,
  } from './syllabify';
  import {
    accents,
    DIAERESIS,
    OXIA,
    VARIA,
    PERISPOMENI,
    diacritics,
    vowels,
    list_of_def_diphthongs,
    diphtongs,
  } from './resources';
  
  const remove_diacritics = (...diacritics: string[]) => {
    return function (text: string, diaeresis = true) {
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
  
  const removeAccentsAndDiacritics = remove_diacritics(
    ...accents,
    ...diacritics
  );
  const removeAccentsAndDiacriticsWithDiaeresis = remove_diacritics(
    ...accents,
    ...diacritics,
    DIAERESIS
  );
  const removeDiacriticsWithoutDiaeresis = remove_diacritics(
    ...diacritics
  );
  const removeDiaeresis = remove_diacritics(DIAERESIS);
  
  const removeRedundantDiaeresis = (word: string) => {
    const redundant_diaereseis = {
      'όϊ': 'όι',
      'όϋ': 'όυ',
      'άϋ': 'άυ',
      'έϊ': 'έι',
    };
    if (word.normalize('NFD').includes(DIAERESIS)) {
      for (const [redundant_diaeresis, replacement] of Object.entries(
        redundant_diaereseis
      )) {
        if (word.includes(redundant_diaeresis)) {
          word = word.replaceAll(redundant_diaeresis, replacement);
          break;
        }
      }
    }
    return word;
  };
  
  export const remove = {
    removeDiacriticsWithoutDiaeresis,
    removeAccentsAndDiacritics,
    removeAccentsAndDiacriticsWithDiaeresis,
    removeDiaeresis,
    removeRedundantDiaeresis,
  };
  
  export const convertToMonotonic = (
    sentence_or_word: string,
    one_syllable_rule = true
  ) => {
    let _sentence_or_word = removeDiacriticsWithoutDiaeresis(
      sentence_or_word
    );
    console.log(_sentence_or_word, 'inside');
    _sentence_or_word = _sentence_or_word.normalize('NFD');
    const polytonic_accent = [VARIA, PERISPOMENI];
    for (const accent of polytonic_accent) {
      if (_sentence_or_word.includes(accent)) {
        _sentence_or_word = _sentence_or_word.replaceAll(accent, OXIA);
      }
    }
    _sentence_or_word = _sentence_or_word.normalize('NFC');
    const words = _sentence_or_word.split(' ');
    const removed_one_syllable_accent: string[] = [];
    let excluded = ['ή'];
    if (_sentence_or_word.endsWith(';')) {
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
        return words.join(' ');
      }
    }
    return removed_one_syllable_accent.join(' ');
  };
  
  
  export const isAccented = (syllable: string) => {
    for (const ch of syllable.normalize('NFD')) {
      if (accents.includes(ch)) {
        return true;
      }
    }
    return false;
  };
  
  
  export const putAccentOnVowel = (vowel: string) => {
    vowel = removeAccentsAndDiacritics(vowel);
    if (!vowels.includes(vowel)) {
      return vowel;
    }
    return (vowel + OXIA).normalize('NFC');
  };
  
  
  export const putAccentOnSyllable = (syllable: string) => {
    for (const def_diph of list_of_def_diphthongs) {
      if (syllable.includes(def_diph)) {
        const accented_def_diph =
          def_diph.slice(0, -1) + putAccentOnSyllable(def_diph.slice(-1));
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
  
  
  export const whereIsAccent = (
    word: string,
    true_syllabification = true
  ) => {
    const syllables = modernGreekSyllabify(word, true_syllabification);
    const reversedSyllables = syllables.reverse();
    for (let index = 0; index < reversedSyllables.length; index++) {
      const syllable = reversedSyllables[index];
      for (const ch of syllable.normalize('NFD')) {
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
  
  
  export const putAccent = (
    word: string,
    accent_name: string,
    true_syllabification = true
  ) => {
    word = removeAccentsAndDiacritics(word);
    if (accent_name === 'ULTIMATE') {
      return putAccentOnTheUltimate(word);
    } else if (accent_name === 'PENULTIMATE') {
      return putAccentOnThePenultimate(word, true_syllabification);
    } else if (accent_name === 'ANTEPENULTIMATE') {
      return putAccentOnTheAntepenultimate(word, true_syllabification);
    } else {
      return word;
    }
  };
  
  
  export const putAccentOnTheUltimate = (
    word: string,
    accent_one_syllable = true,
    second_accent = false
  ) => {
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
  
  
  export const putAccentOnThePenultimate = (
    word: string,
    true_syllabification = true
  ) => {
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
  
  
  export const putAccentOnTheAntepenultimate = (
    word: string,
    true_syllabification = true
  ) => {
    word = removeAccentsAndDiacritics(word);
    const syllables = modernGreekSyllabify(word, true_syllabification);
    if (syllables.length > 2) {
      const to_be_accented = syllables[syllables.length - 3];
      syllables[syllables.length - 3] = putAccentOnSyllable(to_be_accented);
      let res = syllables.join('');
      res = removeRedundantDiaeresis(res);
      return res;
    } else {
      return putAccentOnThePenultimate(word);
    }
  };
  
  