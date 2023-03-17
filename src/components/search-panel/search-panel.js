import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchWord: '',
  };
  onSearchChange = (e) => {
    this.setState({
      searchWord: e.target.value,
    });
    this.props.onSearchChange(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        value={this.state.searchWord}
        onChange={this.onSearchChange}
      />
    );
  }
}
