import './MovieList.css';
import Movie from './Movie';

function MovieList({ movies = [] })
{
    return (
        <div className='movies'>
            {movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            ))}
        </div>
    )
}

export default MovieList;