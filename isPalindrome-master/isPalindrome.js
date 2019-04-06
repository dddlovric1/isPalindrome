function isPalindrome(string) {
    string = string.toLowerCase();                                  // sve iz stringa pretvori u mala slova
    let charactersArr = string.split('');                           // u varijabli razdvoji svako slovo
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');   // valid characters --||--

    let lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    if(lettersArr.join('') === lettersArr.reverse().join(''))
        return true;
    else return false;
}

const result = isPalindrome("fadgrvjfbf");

console.log(result);