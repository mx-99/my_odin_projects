function caesarCipher(x, shift) {
    const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alphabetLower = alphabetUpper.map(letter => letter.toLowerCase());
    
    let shiftedAlphabetUpper = [...alphabetUpper.slice(shift), ...alphabetUpper.slice(0, shift)];
    let shiftedAlphabetLower = [...alphabetLower.slice(shift), ...alphabetLower.slice(0, shift)];
    
    let caesared = [];

    for (let i = 0; i < x.length; i++) {
        let char = x[i];

        if (alphabetUpper.includes(char)) {
            let index = alphabetUpper.indexOf(char);
            caesared.push(shiftedAlphabetUpper[index]);
        } else if (alphabetLower.includes(char)) {
            let index = alphabetLower.indexOf(char);
            caesared.push(shiftedAlphabetLower[index]);
        } else {
            caesared.push(char);  
        }
    }

    return caesared.join('');
}

module.exports = caesarCipher;
