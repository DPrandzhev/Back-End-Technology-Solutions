function findWord(word, text) {
   
    const hasWord = text.toLowerCase().split(' ').includes(word);


    if (hasWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// Example usage:
const wordToFind = 'javascript';
const textToSearch = 'JavaScript is the best programming language';

findWord(wordToFind, textToSearch);
