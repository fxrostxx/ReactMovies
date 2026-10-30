import './Main.css'
import React from 'react';
import MovieList from '../components/MovieList';

class Main extends React.Component
{
    state =
    {
        movies: []
    }
    componentDidMount()
    {
        const apiKey = process.env.REACT_APP_API_KEY;
        fetch(`https://www.omdbapi.com/?s=Matrix&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }));
    }
    render()
    {
        return (
            <div className='main'>
                {
                    <MovieList movies={this.state.movies} />
                }
            </div>
        )
    }
}

export default Main;