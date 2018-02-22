import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';

const API_URL = 'http://localhost:3001/v1/';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      movies: [],
      selectedMovie: '',
      selectedYear: String(new Date().getFullYear())
    };

    this.fetchLocationData = this.fetchLocationData.bind(this);
    this.fetchMovieList = this.fetchMovieList.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
  }

  componentDidMount(){
    // Fetching movie list
    this.fetchMovieList();
  }

  handleYearChange(year){
    this.setState({selectedYear: year}, function(){
      this.fetchLocationData('filter[city]=SF&filter[release_year]='+this.state.selectedYear);
    });
  }

  handleMovieChange(selectedMovie){
    this.setState({selectedMovie: selectedMovie}, function(){
      this.fetchLocationData('filter[city]=SF&filter[movie]='+this.state.selectedMovie);
    });
  }

  // This function makes HTTP call to the API and returns the list of movies and update the state
  fetchMovieList()
  {
    fetch(API_URL+'movies?filter[city]=SF')
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({
      movies: jsonResult.movies
    });
    })
  }


  // This function makes HTTP call to the API and returns the list of locations and update the state
  fetchLocationData(query_params){
    fetch(API_URL+'shooting_locations?'+query_params)
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({
        locations: jsonResult.locations
      });
    })
  }


  render() {
    return (
      <div className="App">
        <Header
        movies={this.state.movies}
        onYearChange={this.handleYearChange}
        onMovieChange={this.handleMovieChange}
        />
        <Map locations = {this.state.locations} />
      </div>
    );
  }
}

export default App;
