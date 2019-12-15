import React from 'react';

const AddMovieForm = props => {
    return (
        <div className="add-movie-form">
            <input
                type="text"
                placeholder="movie name"
                value={props.addingMovieName}
                onChange={props.onInputMovie}
            />
            <input
                type="button"
                value="Add Movie"
                onClick={props.onAddMovie}
                className="btn"
            />
        </div>
    );
};

export default AddMovieForm;
