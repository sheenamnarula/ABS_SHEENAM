import React, { Component } from 'react';
class MovieResultsComponent extends Component 
{
  render() 
  {
  	const mapping = this.props.movieArray.map(function(data) {

			return(

				<ol key={data.imdbID} className="item">
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
          	
		      {mapping}  
		      
		    </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}


export default MovieResultsComponent;
