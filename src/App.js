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
    this.state={"searchInput":"","movieArray":[],"flag":false};
    this.handleChange=this.handleChange.bind(this);
    this.fetchMovieList=this.fetchMovieList.bind(this);
  }

  handleChange(e)
  {
    this.setState({searchInput: e.target.value});
  }
  fetchMovieList(moviename) 
  {
    let movieName = "";
    if(moviename=="")
    {
      movieName = "titanic"
    }
    else
    {
    movieName = moviename;
}
  
  const path = 'http://www.omdbapi.com/?s='+ movieName;
    this.setState({flag: true});
    $.ajax({
    
    url: path,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(data){

    console.log(data.Search);
    this.setState({movieArray:data.Search});
  
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
 