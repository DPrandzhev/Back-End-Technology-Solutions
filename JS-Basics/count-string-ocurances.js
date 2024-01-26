function countOccurrences(text, word) {
    const textArray = text.split(" ");
    let occurrences = 0;

    for (let i = 0; i < textArray.length; i++) {

        if (textArray[i] === word) {
            occurrences++;
        }
    }

    console.log(occurrences);
}


countOccurrences("This is an example text. Example text is useful for examples.", "example");
