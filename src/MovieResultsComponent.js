import React, { Component } from 'react';
class MovieResultsComponent extends Component 
{
  render() 
  { 
    // storing data in results 
  	const results = this.props.movieArray.map(function(data) {   

			return(
         // using imdbID as key as it is unique
				<ol key={data.imdbID} className="item">
        // this html is about how the data should be displayed
                   <p><img src={data.Poster} alt=""/></p>
				   <p><span id="spantitle">Movie Name</span><h4 id="title">{data.Title}</h4></p>
			       <p> <span id="spanyear">Year of Release</span><h4 id="year">{data.Year}</h4></p>
				   <hr/>
			     </ol>
					
					);
		}.bind(this));

    return (
   
      
      <div>
      { 
        (this.props.flag == true) 
          ? <div id="division">  
          	
		      {results}  {/* rendering the results variable*/}
		      
		    </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}


export default MovieResultsComponent;
