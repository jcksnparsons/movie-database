const movieFactory = (movie) => {
    return `<section class="movie">
                <h1>${movie.title}</h1>
                <h4>${movie.releaseDate}</h4>
            </section>`
}

const renderMovies = (movieList) => {
    movieList.forEach(movie => {
        const movieBox = document.querySelector("#movie-container");
        movieBox.innerHTML += movieFactory(movie);
    });
};