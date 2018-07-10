import React from 'react';

import DropGenres from './dropGenres';

class Search extends React.Component {

  componentDidMount() {
    const { requestSort } = this.props;
    requestSort()
  }

  searchHandler = (e) => {
    const text = e.target.value;
    this.props.editSearchText(text);
  }

  popularArrow = () => {
    const { popularAsc, sortType } = this.props;

    if (sortType === 'popularity') {
      return popularAsc ? '⇑' : '⇓';
    } else {
      return null
    }
  }

  voteArrow = () => {
    const { voteAsc, sortType } = this.props;
    if (sortType === 'vote_average') {
      return voteAsc ? '⇑' : '⇓';
    } else {
      return null
    }
  }

  revenueArrow = () => {
    const { revenueAsc, sortType } = this.props;
    if (sortType === 'revenue') {
      return revenueAsc ? '⇑' : '⇓';
    } else {
      return null
    }
  }

  render() {
    const { genreList, editGenre, editButton } = this.props;
    return (
      <div className='discover'>
        <div className='discover__sort'>
          <button onClick={() => editButton('popularity')}>Popular{this.popularArrow()}</button>
          <button onClick={() => editButton('vote_average')}>Vote{this.voteArrow()}</button>
          <button onClick={() => editButton('revenue')}>Revenue{this.revenueArrow()}</button>
          <DropGenres genreList={genreList} editGenre={editGenre} />
        </div>
        <input className='discover__search' placeholder='Search' type='text' value={this.props.searchText} onChange={this.searchHandler}/>
      </div>
    )
  }
}

export default Search;
