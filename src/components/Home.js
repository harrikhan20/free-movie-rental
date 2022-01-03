import React from 'react';


 function Home({movies}) {
const mappedMovies = movies.map(movie => <li key={movie.id}>{movie.title}</li>)

    return (
        <div id="">
            <h1>Please Choose The Movie You Want To Order</h1>

            {mappedMovies}

            
        </div>
    )
}

export default Home;