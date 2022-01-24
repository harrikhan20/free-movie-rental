import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';




function MovieSummary({movies}) {
    const [show, visible] = useState(false)

   function deleteMovie(id) {
        fetch(`http://localhost:3001/movies/${id}`, {
            method: 'DELETE'
        }). then((result) => {
            result.json().then((resp) =>{
                console.warn(resp)
                
            })
        })
        window.location.reload();
        
      
      
     }



    return (
        <div id="">
            <p>{movies.title}</p>
            {
            show?<p> {movies.Summary} </p>:false
            }

            <button onClick={()=> visible(true)}>View Summary</button>
            <button onClick={()=> visible(false)}>hide Summary</button>
            <button onClick={() => deleteMovie(movies.id)}>Delete Review</button>
            <button><Link></Link>Rent This Movie </button>
            
            
        </div>
    )
}



export default MovieSummary; 