document.addEventListener('DOMContentLoaded', function () {
    // Check if watchlist data is in local storage
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  
    // Render watchlist
    renderWatchlist();
  
    // Function to add a movie to the watchlist
    window.addMovie = function () {
      const movieInput = document.getElementById('movieInput');
      const movieTitle = movieInput.value.trim();
  
      if (movieTitle !== '') {
        watchlist.push(movieTitle);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        renderWatchlist();
        movieInput.value = ''; // Clear input field
      }
    };
  
    // Function to remove a movie from the watchlist
    window.removeMovie = function (index) {
      watchlist.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      renderWatchlist();
    };
  
    // Function to render the watchlist
    function renderWatchlist() {
      const watchlistContainer = document.getElementById('watchlist');
      watchlistContainer.innerHTML = '';
  
      watchlist.forEach((movie, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${movie}</span>
          <button onclick="removeMovie(${index})">Remove</button>
        `;
        watchlistContainer.appendChild(listItem);
      });
    }
  });