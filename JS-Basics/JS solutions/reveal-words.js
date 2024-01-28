function revealWords(words, template) {

    const wordArray = words.split(', ');


    const templateArray = template.split(' ');


    const revealedWords = templateArray.map(word => {

        if (word.includes('*')) {

            const matchingWord = wordArray.find(w => w.length === word.length);

 
            return matchingWord ? matchingWord : word;
        } else {

            return word;
        }
    });

    const result = revealedWords.join(' ');

    return result;
}