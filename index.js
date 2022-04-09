function palindrome(string) {

    const len=String.length;
    
    for ( let i = 0; i < len/2; i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
const String=prompt('Introduceți un șir: ');
const value = palindrome(string);
console.log(value);