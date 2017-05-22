import React, { Component } from 'react';
import './App.css';
import './index.css';
import $ from 'jquery';
import MovieResultsComponent from './MovieResultsComponent.js';



class App extends Component 
{
  constructor()
  {
    super();
    this.state={"searchInput":"","movieArray":[],"flag":false}; // setting initial state in which inputs are having null values
    this.handleChange=this.handleChange.bind(this);              /* binding functions which are used*/ 
    this.fetchMovieList=this.fetchMovieList.bind(this);
  }
// function to change the state after getting value from input field
  handleChange(e)                  
  {
    this.setState({searchInput: e.target.value});
  }
  // function to call api and  get movies list
  fetchMovieList(moviename) 
  {
    let movieName = "";  // movieName acts as the title of a movie
    if(moviename=="")  // checking the null condition
    {
      movieName = "titanic" // if null, then default movie titanic will be displayed
    } 
    else
    {
    movieName = moviename;  // value from input
}
  
  const path = 'http://www.omdbapi.com/?s='+ movieName;  // url to be passed by concatinating title of the movie
    this.setState({flag: true});

    $.ajax({
    
    url: path,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(data){

    console.log(data.Search);
    this.setState({movieArray:data.Search}); // after getting data from ajax call,data is to be pushed in an array
  
    }.bind(this),
    error: function(err){
    console.log("error in data fetching ");
    }
    });
  }
  



  render() {
    return (
      <div className="App">
      <h1 id = "heading">Movie Search</h1>
            <input id="search" type="text" value={this.state.searchInput} onChange={this.handleChange} placeholder="Type here"/>
            <button type="submit" id="btn" onClick={() => {this.fetchMovieList(this.state.searchInput)}}>Search</button>
            <MovieResultsComponent movieArray={this.state.movieArray} flag={this.state.flag} />

        </div>
    );
  }
}

export default App;
 