import React from 'react';
import MovieSummary from './MovieSummary';


 function Home({movies}) {
const mappedMovies = movies.map(movies =>  <MovieSummary key={movies.id} movies={movies} title={movies.title}/>)

    return (
        <div id="">
            <h1>Please Choose The Movie You Want To Order</h1>

            {mappedMovies}
            

            
        </div>
    )
}

export default Home;