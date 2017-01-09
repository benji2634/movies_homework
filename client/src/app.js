var React = require('react');
var ReactDOM = require('react-dom');
var MoviesContainer = require('./components/MoviesContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <MoviesContainer />,
    document.getElementById('app')
  );
};
