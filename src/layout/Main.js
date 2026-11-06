import './Main.css'
import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component
{
    state =
    {
        movies: [],
        count: 0
    }
    searchMovie = (query, type='all', page) =>
    {
        const apiKey = process.env.REACT_APP_API_KEY;
        if (query !== "")
        {
            fetch(`https://www.omdbapi.com/?s=${query}${type !== 'all' ? `&type=${type}` : ``}&page=${page}&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => this.setState({ movies: data.Search, count: data.totalResults }));
        }
    }
    render()
    {
        return (
            <div className='main'>
                <Search searchMovie={this.searchMovie} totalCount={this.state.count} />
                {
                    this.state.movies == null ? <h1>Nothing</h1> :
                        this.state.movies.length == 0 ? <Preloader /> :
                            <MovieList movies={this.state.movies} />
                }
            </div>
        )
    }
}

export default Main;