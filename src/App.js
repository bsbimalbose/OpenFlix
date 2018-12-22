import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

class App extends Component {
  state = {
    movies: [],
    loading: true
  };
  componentDidMount() {
    axios.get('http://3.17.134.186:4500/movies').then(res => {
      this.setState({ movies: res.data, loading: false });
    });
  }
  render() {
    const { loading, movies } = this.state;

    const content = loading ? (
      <div
        style={{
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <i style={{ fontSize: '32px' }} class="fas fa-spinner fa-spin" />
      </div>
    ) : (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    );

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Mercury</span>
        </nav>
        {content}
      </div>
    );
  }
}

export default App;
