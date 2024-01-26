function solve(substring, startIndex, count) {
    
    let newstring = "";
    for (let i = startIndex; i <= count; i++)
    {
        newstring += substring[i];
    }
    console.log(newstring);

}

solve('SkipWord', 4, 7);