import React, { useState,useEffect } from "react";

export default function Movie() {
    const [inputText, setInputText] = useState('');
    const [search_movie, setSearch_movie] = useState('pyar');
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    // Fetch Data from OMDB API
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
    
      try {
        const response = await fetch(`http://www.omdbapi.com/?s=${search_movie}&apikey=a53eed4a&page=${page}`);
        const data = (await response.json()).Search;
        
        setItems(prevItems => [...prevItems, ...data]); // Append New data to Items
        setPage(prevPage => prevPage + 1); // Increment Page Number
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Detect End of the page when scroll
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
      }
      fetchData();
    };
    
    // Add a event listen to listen to scroll events
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    useEffect(() => {
      fetchData();
    }, [search_movie])

    // search bar handle
    const MovieSearchBtn = () => {
        setSearch_movie(inputText);
        setItems([]); // Clear items when new movie is searched
    }  
  
  return (
      <>
      <div className="container-fluid bg-dark">
        <div className="row bg-dark">
          <div className="col col-12 col-md-8 col-lg-8 w-100 d-flex justify-content-center my-3">
              <input type="search" className="form-control w-50 d-inline-block" onChange={(e)=>setInputText(e.target.value)} placeholder="Search Movie here.." />
              <button type="submit" className="btn btn-primary ms-2" onClick={MovieSearchBtn}>Search</button>
            </div>
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
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
              </div>
              </div>
          </>
  );
}
