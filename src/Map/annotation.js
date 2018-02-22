import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventInfo from './event_info';
import './styles.css'

class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover:false
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.setHover = this.setHover.bind(this);
  }

  setHover(value){
    this.setState({
    hover: value
    });
  }

  // Show EventInfo callout when mouse hover or clicks
  onMouseEnterHandler()
  {
    this.setHover(true);
  }

  // Hide EventInfo callout when mouse Leaves
  onMouseLeaveHandler()
  {
    this.setHover(false);
  }



  render() {
    return(

      <div
        className="marker_container"
        onMouseEnter={this.onMouseEnterHandler}
        onClick={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
      <div className="pin"></div>
      { this.state.hover && <EventInfo location_name={this.props.location_name}
                                       date={new Date(this.props.date).toLocaleDateString("en-US")}
                                       movie_name={this.props.movie_name}
                                       />
      }
      </div>

    );
  }
}
Annotation.propTypes = {
    location_name: PropTypes.string,
    date: PropTypes.number,
    hover: PropTypes.bool

};
export default Annotation
