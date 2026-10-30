import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state =
    {
        query: ""
    }
    handleKey = (event) =>
    {
        if (event.key === 'Enter')
            this.props.searchMovie(this.state.query);
    }
    render()
    {
        return (
            <div className='search'>
                <input type='search'
                    placeholder='Search'
                    value={this.state.query}
                    onChange={(e) => this.setState({ query: e.target.value })}
                    onKeyUp={this.handleKey}
                />
            </div>
        )
    }
}

export default Search;