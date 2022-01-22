import React from 'react'
import { useHistory } from 'react-router-dom';



function MovieSummary({movies}) {
    const history = useHistory()


function handleClick() {
    history.push(`/movies/${movies.id}`)
}

    return (
        <div id="">
            <p>{movies.title}</p>

            <button onClick={handleClick}>View Summary</button>
        </div>
    )
}



export default MovieSummary; 