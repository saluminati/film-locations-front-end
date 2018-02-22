import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: '',
      selectedMovie: '',
      years: []
    };

    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleMovieChange = this.handleMovieChange.bind(this);
    this.initYears = this.initYears.bind(this);

  }



  initYears(){
    var years = [];
    for(var i=(new Date()).getFullYear();i>=1900;i--){
      years.push({value: String(i), label: String(i), clearableValue: false});
    }
    this.setState({years: years});
    //this.setState({ selectedYear: years[0]});
  }

  componentDidMount(){
    this.initYears();
  }

  handleMovieChange(selectedMovie) {
    if(!selectedMovie){
      this.setState({ selectedMovie: '' });
      return;
    }

    this.setState({ selectedMovie });
    this.props.onMovieChange(selectedMovie.title);
  }

  handleYearChange(selectedYear) {
    if(!selectedYear){
      this.setState({ selectedYear: '' });
      return;
    }

    this.setState({ selectedYear });
    this.props.onYearChange(selectedYear.value);
  }

  render() {
    const { selectedYear, selectedMovie } = this.state;
    const selectedYearValue = selectedYear && selectedYear.value;
    const selectedMovieValue = selectedMovie && selectedMovie.value;
    const { years } = this.state;
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <form className="navbar-form navbar-left" action="/action_page.php">
            <div className="form-group min-form-item-width">
            <label>Search by release year:</label> <Select
              name="form-field-name"
              value={selectedYearValue}
              placeholder = "Year"
              autoBlur = {true}
              onChange={this.handleYearChange}
              options={
                years
              }
            />
            </div>
            <div className="form-group min-form-item-width">
            <label>Search by movie:</label> <Select
              name="form-field-name"
              value={selectedMovieValue}
              placeholder = "Movie"
              autoBlur = {true}
              valueKey="title"
              labelKey="title"
              onChange={this.handleMovieChange}
              options={
                this.props.movies
              }
            />
            </div>
          </form>
        </div>
      </nav>
  );
  }
}

export default Header;
