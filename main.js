
const movieNames = {
    movieLists: ["The Matrix","The Notebook","Mr.Nobody","The Lion King"],

    showMovies: function(){
        document.getElementById('button_movie').innerHTML = '';
        for(let i = 0;i < this.movieLists.length;i++){
            let movieButton = document.createElement('button');
            movieButton.id = 'movies';
            movieButton.className = 'btn btn-danger';
            movieButton.appendChild(document.createTextNode(this.movieLists[i]));
            $('#button_movie').append(movieButton);
        }
    },
    addMovieToList: function(){
        let inputValue = $('#movie_input').val().trim();
        document.getElementById('movie_input').value = '';
        if(inputValue === ''){
            return false;
        }
        this.movieLists.push(inputValue);
        this.showMovies();
    }
}

movieNames.showMovies();