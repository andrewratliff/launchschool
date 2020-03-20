let acronym = string => {
  let regex = /[\s\-]+/

  return string.split(regex).reduce((result, word) => {
    result.push(word.charAt(0).toUpperCase());
    return result;
  }, []).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
