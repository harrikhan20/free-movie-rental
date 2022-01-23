import React, {useState} from 'react';



 function AddMovieForm({addMovie}) {

    const [formData, setFormData] = useState({
        title: '',
        Summary: ''

    })
    
    function handleSubmit(event) {
        event.preventDefault()
        addMovie(formData)

    }
    

    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
            onChange={event => setFormData({...formData, title: event.target.value})}
            value={formData.title}
            placeholder='Movie Name'
            />

            <br/>

            <input type="text"
            onChange={event => setFormData({...formData, Summary: event.target.value})}
            value={formData.Summary}
            placeholder='Movie Summary'
            />

            <br/>

            <input type="submit" value="Add The Movie To The List" />

            



        </form>
    )
}

export default AddMovieForm;
