import './Main.css'
import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component
{
    state =
    {
        movies: []
    }
    searchMovie = (query) =>
    {
        const apiKey = process.env.REACT_APP_API_KEY;
        if (query !== "")
        {
            fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => this.setState({ movies: data.Search }));
        }
    }
    render()
    {
        return (
            <div className='main'>
                <Search searchMovie={this.searchMovie} />
                {
                    this.state.movies == 0 ? <Preloader /> :
                        <MovieList movies={this.state.movies} />
                }
            </div>
        )
    }
}

export default Main;