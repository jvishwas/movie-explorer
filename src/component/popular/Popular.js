import React, { useState,useEffect } from "react";

export default function Movie() {
    const [items, setItems] = useState([]);

    // Fetch Popular Data from OMDB API
    const FetchMovieData = async () => {
      let URL=`https://www.omdbapi.com/?s=love&apikey=928b0069&`;
      let response_data = await fetch(URL);
      let result = await response_data.json();
      setItems(result.Search)
  }
  useEffect(() => {
    FetchMovieData();
  }, [])
  
  return (
      <>
      <div className="container-fluid bg-dark">
        <div className="row bg-dark">
        </div>
        <div className="row my-3">
        
          {
              items && items.map((data) => (
                <div className="col col-12 col-md-4 " key={data.id}>
                  <div className="round">
                    <img src={data.Poster} alt="not fount" style={{width:"100%", height:"500px"}}/>
                  </div>
                  <div className="text-light">
                    <h5>{data.Title }</h5>
                    <p className="pb-4"><strong>{data.Year}</strong></p>
                  </div>
                </div>
                
        
              ))
              
          }
              </div>
              </div>
          </>
  );
}
