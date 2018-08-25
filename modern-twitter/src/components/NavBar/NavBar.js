import React from 'react';
import SearchBar from '../SearchBar/SearchBar'

class NavBar extends React.Component {
  render() {
    return(
      <div className='bg-white h5 w-100 '>
        <SearchBar />
      </div>
    )
  }
}

export default NavBar;
