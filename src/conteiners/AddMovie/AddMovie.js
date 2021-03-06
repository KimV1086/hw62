import React, {Component, Fragment} from 'react';
import AddForm from "../../components/AddMovieComponents/AddForm/AddForm";
import AddMovie from "../../components/AddMovieComponents/AddMovie/AddMovie";
import Header from "../../components/Header/Header";


class Watchlist extends Component {
    state= {
        addingMovieName: '',
        movies: []
    };

    inputMovie = (event) => {
        this.setState({
            addingMovieName: event.target.value
        });
    };

    addMovie = () => {
        if (this.state.addingMovieName) {
            const date = new Date();
            const movies = [...this.state.movies];
            const movie = {
                id: date.toISOString(),
                name: this.state.addingMovieName
            };

            movies.push(movie);

            this.setState({
                addingMovieName: '',
                movies
            });
        } else {
            alert('Enter movie!');
        }
    };

    changeMovie = (event, id) => {
        const movieIndex = this.state.movies.findIndex(task => task.id === id);
        const movies = [...this.state.movies];
        const movie = {...movies[movieIndex]};
        movie.name = event.target.value;
        movies[movieIndex] = movie;

        this.setState({movies});
    };

    removeMovie = id => {
        const movieIndex = this.state.movies.findIndex(task => task.id === id);
        const movies = [...this.state.movies];
        movies.splice(movieIndex, 1);

        this.setState({movies});
    };

    componentDidMount() {
        const savedWatchList = localStorage.getItem('watchList');

        if (savedWatchList) {
            const movies = JSON.parse(savedWatchList);
            this.setState({movies});
        }
    }

    componentDidUpdate() {
        localStorage.setItem('watchList', JSON.stringify(this.state.movies));
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <AddForm
                        addingMovieName={this.state.addingMovieName}
                        onInputMovie={(event) => this.inputMovie(event)}
                        onAddMovie={this.addMovie}
                    />
                    <p>To watch list:</p>
                    {this.state.movies.map(movie => (
                        <AddMovie
                            key={movie.id}
                            name={movie.name}
                            onChangeMovie={(event) => this.changeMovie(event, movie.id)}
                            onRemoveMovie={() => this.removeMovie(movie.id)}
                        />
                    ))}
                </div>
            </Fragment>

        );
    }
}

export default Watchlist;
