import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import Picture from "../components/Picture"

const Homepage = () => {
    const [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    const auth = "563492ad6f91700001000001e3d3c49b2cb445218fdb5cf6c3a556c3";
    const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
    const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`

    // fetch data from pexels API
    const search = async (url) => {
      const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      let parsedData = await dataFetch.json();
      setData(parsedData.photos);
    };

    // Load more picture
    const morepicture = () => {
      
    }

    // fetch data when the page loads up
    useEffect(() => {
      search(intialURL)
    }, []);
  
    return (
    <div style={{ minHeight: "100vh" }}>
        <Search search={() => {search(searchURL)}} setInput={setInput}/>
        <div className="pictures">
            {data && data.map(d => {
              return <Picture data={d} />
            })
            }
        </div>

        <div className="morePicture">
            <button onClick={morepicture}>Load More</button>
        </div>
    </div>
  )
}

export default Homepage;