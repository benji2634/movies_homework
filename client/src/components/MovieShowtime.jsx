var React = require('react');

var MovieShowtime = React.createClass({
  render: function () {
    return (
      <div className='movie'>
        <h4 className='movie-name'>
        {this.props.name}
        </h4>
        <div className="movie-url">
          <a href={this.props.movieUrl}>Synopsis</a>
        </div>
        <div className="movie-showtime">
          <a href={this.props.movieShowtime}>Showtimes</a>
        </div>
      </div>
    );
  }
});

module.exports = MovieShowtime;