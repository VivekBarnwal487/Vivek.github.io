const moviesDatabase = [
    { title: "The Shawshank Redemption", year: "1994", genre: "Drama", rating: "9.3" },
    { title: "The Godfather", year: "1972", genre: "Crime, Drama", rating: "9.2" },
    { title: "The Dark Knight", year: "2008", genre: "Action, Crime", rating: "9.0" },
    { title: "Pulp Fiction", year: "1994", genre: "Crime, Drama", rating: "8.9" },
    { title: "The Lord of the Rings: The Return of the King", year: "2003", genre: "Adventure, Drama", rating: "9.0" },
    { title: "Inception", year: "2010", genre: "Action, Sci-Fi", rating: "8.8" },
    { title: "Fight Club", year: "1999", genre: "Drama", rating: "8.8" },
    { title: "Forrest Gump", year: "1994", genre: "Drama, Romance", rating: "8.8" },
    { title: "The Matrix", year: "1999", genre: "Action, Sci-Fi", rating: "8.7" },
    { title: "Goodfellas", year: "1990", genre: "Biography, Crime", rating: "8.7" },
    { title: "The Empire Strikes Back", year: "1980", genre: "Action, Adventure", rating: "8.7" },
    { title: "Interstellar", year: "2014", genre: "Adventure, Drama", rating: "8.7" },
    { title: "Seven", year: "1995", genre: "Crime, Drama", rating: "8.6" },
    { title: "Spirited Away", year: "2001", genre: "Animation, Adventure", rating: "8.6" },
    { title: "Saving Private Ryan", year: "1998", genre: "Drama, War", rating: "8.6" },
    { title: "The Green Mile", year: "1999", genre: "Crime, Drama", rating: "8.6" },
    { title: "Life Is Beautiful", year: "1997", genre: "Comedy, Drama", rating: "8.6" },
    { title: "Parasite", year: "2019", genre: "Drama, Thriller", rating: "8.5" },
    { title: "Léon: The Professional", year: "1994", genre: "Action, Crime", rating: "8.5" },
    { title: "Gladiator", year: "2000", genre: "Action, Adventure", rating: "8.5" },
    { title: "Back to the Future", year: "1985", genre: "Adventure, Comedy", rating: "8.5" },
    { title: "The Lion King", year: "1994", genre: "Animation, Adventure", rating: "8.5" },
    { title: "Whiplash", year: "2014", genre: "Drama, Music", rating: "8.5" },
    { title: "The Prestige", year: "2006", genre: "Drama, Mystery", rating: "8.5" },
    { title: "Psycho", year: "1960", genre: "Horror, Mystery", rating: "8.5" },
    { title: "Casablanca", year: "1942", genre: "Drama, Romance", rating: "8.5" },
    { title: "American History X", year: "1998", genre: "Drama", rating: "8.5" },
    { title: "The Intouchables", year: "2011", genre: "Biography, Comedy", rating: "8.5" },
    { title: "Modern Times", year: "1936", genre: "Comedy, Drama", rating: "8.5" },
    { title: "Rear Window", year: "1954", genre: "Mystery, Thriller", rating: "8.5" },
    { title: "City Lights", year: "1931", genre: "Comedy, Drama", rating: "8.5" },
    { title: "The Departed", year: "2006", genre: "Crime, Drama", rating: "8.5" },
    { title: "Terminator 2: Judgment Day", year: "1991", genre: "Action, Sci-Fi", rating: "8.6" },
    { title: "Spider-Man: Into the Spider-Verse", year: "2018", genre: "Animation, Action", rating: "8.4" },
    { title: "Avengers: Endgame", year: "2019", genre: "Action, Adventure", rating: "8.4" },
    { title: "Joker", year: "2019", genre: "Crime, Drama", rating: "8.4" },
    { title: "Django Unchained", year: "2012", genre: "Drama, Western", rating: "8.4" },
    { title: "WALL-E", year: "2008", genre: "Animation, Adventure", rating: "8.4" },
    { title: "Coco", year: "2017", genre: "Animation, Family", rating: "8.4" },
    { title: "Spider-Man: No Way Home", year: "2021", genre: "Action, Adventure", rating: "8.2" },
    { title: "Jurassic Park", year: "1993", genre: "Action, Adventure", rating: "8.2" },
    { title: "Titanic", year: "1997", genre: "Drama, Romance", rating: "7.9" },
    { title: "Avatar", year: "2009", genre: "Action, Adventure", rating: "7.9" },
    { title: "The Silence of the Lambs", year: "1991", genre: "Crime, Drama", rating: "8.6" },
    { title: "Raiders of the Lost Ark", year: "1981", genre: "Action, Adventure", rating: "8.4" },
    { title: "Star Wars: A New Hope", year: "1977", genre: "Action, Adventure", rating: "8.6" },
    { title: "Jaws", year: "1975", genre: "Adventure, Thriller", rating: "8.1" },
    { title: "Alien", year: "1979", genre: "Horror, Sci-Fi", rating: "8.5" },
    { title: "Blade Runner 2049", year: "2017", genre: "Action, Drama", rating: "8.0" },
    { title: "Eternal Sunshine of the Spotless Mind", year: "2004", genre: "Drama, Romance", rating: "8.3" },
    { title: "The Truman Show", year: "1998", genre: "Comedy, Drama", rating: "8.1" },
    { title: "Monsters, Inc.", year: "2001", genre: "Animation, Adventure", rating: "8.1" },
    { title: "Finding Nemo", year: "2003", genre: "Animation, Adventure", rating: "8.2" },
    { title: "Shrek", year: "2001", genre: "Animation, Adventure", rating: "7.9" },
    { title: "Toy Story", year: "1995", genre: "Animation, Adventure", rating: "8.3" },
    { title: "Up", year: "2009", genre: "Animation, Adventure", rating: "8.3" },
    { title: "Ratatouille", year: "2007", genre: "Animation, Adventure", rating: "8.1" },
    { title: "Mad Max: Fury Road", year: "2015", genre: "Action, Adventure", rating: "8.1" },
    { title: "No Country for Old Men", year: "2007", genre: "Crime, Drama", rating: "8.2" },
    { title: "Dune: Part Two", year: "2024", genre: "Action, Adventure", rating: "8.6" }
];

// Core genres to create filter buttons for
const genresList = ["All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Sci-Fi", "Thriller"];

let selectedGenre = "All"; // Track the active filter globally

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('results');
const genreContainer = document.getElementById('genreFilters');

// Initialize App
createGenreButtons();
displayMovies(moviesDatabase);

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);

// Dynamic generation of genre buttons
function createGenreButtons() {
    genresList.forEach(genre => {
        const button = document.createElement('button');
        button.classList.add('genre-btn');
        button.textContent = genre;
        
        if (genre === "All") button.classList.add('active');

        button.addEventListener('click', () => {
            // Remove active highlight from old button, add to clicked button
            document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            selectedGenre = genre; // update tracking variable
            performSearch();       // run filtering system
        });

        genreContainer.appendChild(button);
    });
}

// Master filter function handles text searches AND genre filters simultaneously
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredMovies = moviesDatabase.filter(movie => {
        // 1. Text Check: Does it match the title?
        const matchesText = movie.title.toLowerCase().includes(searchTerm);
        
        // 2. Genre Check: Is it 'All' OR does the movie's genre string include the selected genre?
        const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre);
        
        return matchesText && matchesGenre;
    });

    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    resultsContainer.innerHTML = ''; 

    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No movies found fitting that combo!</p>';
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        const encodedTitle = encodeURIComponent(movie.title);
        const posterUrl = `https://via.placeholder.com/200x300?text=${encodedTitle}`;

        movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p style="color: #e50914;"><strong>★ Rating:</strong> ${movie.rating}</p>
        `;
        
        resultsContainer.appendChild(movieCard);
    });
}