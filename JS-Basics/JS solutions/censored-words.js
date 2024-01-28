// function solve(text, word) {
//     let censored_word = text.replace(new RegExp(word, 'g'), match => '*'.repeat(match.length));
//     console.log(censored_word);
// }


function solve(text, word) {

    function repeat(char, length) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += char;
        }
        return result;
    }

    let censored_word = text.replace(word, repeat("*", word.length));
    console.log(censored_word);

}


