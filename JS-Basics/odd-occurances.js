function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');

    let wordCount = new Map();

    for (let word of words) {
        word = word.toLowerCase();
        if (!wordCount.has(word)) {
            wordCount.set(word, 1);
        } else {
            wordCount.set(word, wordCount.get(word) + 1);
        }
    }

    let oddOccurrences = [];
    for (let [word, count] of wordCount) {
        if (count % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    console.log(oddOccurrences.join(' '));
}
