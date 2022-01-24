import React from 'react';
import MovieSummary from './MovieSummary';
import { Link } from 'react-router-dom';


 function Home({movies}) {
const mappedMovies = movies.map(movies =>  <MovieSummary key={movies.id} movies={movies} summary={movies.summary} />)

    return (
        <div id="">
            <h1>Please Choose The Movie You Want To Order</h1>

            {mappedMovies}

            <br/>

            <Link to='/movies/new'>Add A Movie For Others To Rent</Link>

            
        </div>
    )
}

export default Home;