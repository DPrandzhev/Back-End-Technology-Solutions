
function processPhoneBook(entries) {
    const phoneBook = {};

    for (const entry of entries) {
        const [name, number] = entry.split(' ');

        phoneBook[name] = number;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}

