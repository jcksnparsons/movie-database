const getMovies = () => {
    fetch("http://localhost:3000/movies")
        .then(resp => resp.json())
        .then(movies => {
            renderMovies(movies);
        })
};