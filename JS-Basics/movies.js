function movies(input) {
    let movieList = [];

    for (let command of input) {
        let tokens = command.split(' ');

        if (tokens[0] === 'addMovie') {
            let movieName = tokens.slice(1).join(' ');
            movieList.push({ name: movieName });
        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            let movieName = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');

            let movie = movieList.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            let movieName = tokens.slice(0, index).join(' ');
            let date = tokens.slice(index + 1).join(' ');

            let movie = movieList.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    let filteredMovies = movieList.filter(movie => movie.name && movie.director && movie.date);
    filteredMovies.forEach(movie => {
        console.log(JSON.stringify(movie));
    });
}