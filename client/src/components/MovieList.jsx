var React = require('react');
var MovieShowtime = require('./MovieShowtime.jsx');

var MovieList = React.createClass({
  render: function () {
    var movieComponents = this.props.movies.map(function (movieObject) {
      return (
        <MovieShowtime name={movieObject.name} key={movieObject.id} showtime={movieObject.showTimesURL}>
        </MovieShowtime>
      )
    });
    return (
      <div className='movie-list'>
        {movieComponents}
      </div>
    );
  }
});

module.exports = MovieList;
