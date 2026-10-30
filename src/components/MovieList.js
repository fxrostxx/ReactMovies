import './MovieList.css';
import Movie from './Movie';

function MovieList(props)
{
    return (
        <div className='movies'>
            {
                props.movies.map
                (
                    movie =>
                    {
                        return <Movie key={movie.imdbID} {...movie} />
                    }
                )
            }
        </div>
    )
}

export default MovieList;