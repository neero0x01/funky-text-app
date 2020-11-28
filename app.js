const filterInput  = Array.from(document.querySelectorAll('[name="option"]'));
const message = document.querySelector('textarea');
const output = document.getElementById('output');
const funkyLetters = {
  '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

const filters = {
  sarcastic(letter,i){
    if(i % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  funky(letter){
    let funkyLetter = funkyLetters[letter];
    if(funkyLetter) {
      return funkyLetter;
    }
    funkyLetter = funkyLetters[letter.toUpperCase()];

    if(funkyLetter) {
      return funkyLetter;
    }
    return letter;
  },
  unable(letter){
    let random = Math.floor(Math.random() * 3)
    if(letter === ' ' && random ===2) return '...';
    return letter;
  }
}

function handleOutput(text) {
  const filter = filterInput.find(input => input.checked).value;

  let mod = [...text].map(filters[filter]);
  output.textContent = mod.join('');
}

message.addEventListener('input', e => handleOutput(e.target.value))

filterInput.forEach(input => input.addEventListener('input', () => handleOutput(message.value)))
