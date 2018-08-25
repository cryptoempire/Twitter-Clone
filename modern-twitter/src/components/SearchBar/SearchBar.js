import React from 'react';

class SearchBar extends React.Component {
constructor() {
  super();
  this.state = {
    input: '',
    isClicked: false,
  }
}



  render() {
    return (
      <div className='mt4-ns w-10'>
        <input className='br-pill  bw1 shadow-1 bg-light-green ' type='text' placeholder="Search Twitter" />
      </div>
    )
  }
}

export default SearchBar;
