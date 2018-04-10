import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlefield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {

    const badMovie = this.state.badMovies.map( movie => 
     <Movie movie={movie} /> 
    )

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
        {badMovie}
      </div>
    );
  }
}

export default App;
