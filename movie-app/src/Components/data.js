

import React from "react";
import Request from "superagent";
import _ from "lodash";

class Data extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.search();
  }

  updateSeach() {
    this.search(this.refs.query.value);
  }

  render() {
    var movies = _.map(this.state.movies, (movie) => {
      return <li>{movie.Title}</li>;
    });
    return <div>
        <input ref="query" onChange={ (e) => { this.updateSearch(); }} type="text" />
        <ul>{movies}</ul>
      </div>;
  }

  search(query = "star") {
    var url = `http://omdbapi.com?s=${query}&y=&r=json&plot=short&apikey=3aed766`;
    Request.get(url).then(res => {
      this.setState({
        movies: res.body.Search,
        total: res.body.totalResults
      });
    });
  }
}

export { Data as default };
