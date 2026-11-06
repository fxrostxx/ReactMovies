import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state =
    {
        query: "",
        type: "all",
        page: 1
    }
    handleKey = (event) =>
    {
        if (event.key === 'Enter')
            this.setState({ page: 1 }, () => this.props.searchMovie(this.state.query, this.state.type));
    }
    handleFilter = (event) =>
    {
        this.setState(() => ({ type: event.target.dataset.type }), () => ({ query: this.props.searchMovie(this.state.query, this.state.type) }));
    }
    prevPage = () =>
    {
        this.setState
        (
            () => (this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 }),
            () => { this.props.searchMovie(this.state.query, this.state.type, this.state.page) }
        )
    }
    nextPage = () =>
    {
        this.setState
        (
            () => ({ page: this.state.page + 1 }),
            () => { this.props.searchMovie(this.state.query, this.state.type, this.state.page) }
        )
    }
    setPage = (pageNumber) =>
    {
        this.setState(() => ({ page: pageNumber }), () => { this.props.searchMovie(this.state.query, this.state.type, this.state.page) });
    }
    render()
    {
        let itemsPerPage = 10;
        let totalPages = Math.ceil(this.props.totalCount / itemsPerPage);
        let number = [];
        for (let i = 0; i < totalPages; ++i) number.push(i + 1);
        return (
            <div>
                <div className='search'>
                    <input type='search'
                        placeholder='Search'
                        value={this.state.query}
                        onChange={(e) => this.setState({ query: e.target.value })}
                        onKeyUp={this.handleKey}
                    />
                    <button className='btn' onClick={() => this.props.searchMovie(this.state.query, this.state.type)}>Search</button>
                </div>
                <div className='radio'>
                    <input type='radio' name='type' id='radio-all' data-type='all' checked={this.state.type === 'all'} onChange={this.handleFilter} /><label htmlFor='radio-all'>All</label>
                    <input type='radio' name='type' id='radio-movie' data-type='movie' checked={this.state.type === 'movie'} onChange={this.handleFilter} /><label htmlFor='radio-movie'>Movie</label>
                    <input type='radio' name='type' id='radio-series' data-type='series' checked={this.state.type === 'series'} onChange={this.handleFilter} /><label htmlFor='radio-series'>Series</label>
                    <input type='radio' name='type' id='radio-games' data-type='game' checked={this.state.type === 'game'} onChange={this.handleFilter} /><label htmlFor='radio-game'>Game</label>
                </div>
                <div className='pagination'>
                    <button className='btn' onClick={this.prevPage}>Previous</button>
                    <div className='items'>
                        {
                            number.slice(0, totalPages).map
                            (
                                (element, index) =>
                                (
                                    <button className={element === this.state.page ? "btn-current-page" : ""} onClick={() => (this.setPage(element))}>{element}</button>
                                )
                            )
                        }
                    </div>
                    <button className='btn' onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }
}

export default Search;