import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isClicked: false
    };
  }

  render() {
    return (
      <div className="mt3 w-10 fr mr6">
        <input
          className="br-pill  bw1 shadow-1 bg-light-green "
          type="text"
          placeholder="Search Twitter"
        />
      </div>
    );
  }
}

export default SearchBar;
