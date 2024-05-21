import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {

  const [countryCode, setCountryCode] = useState(null);
  const [progress, setProgress] = useState(0)

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    async function fetchData() {
      const url = `https://ipapi.co/json/`;
      try {
        const response = await fetch(url);
        // console.log("- - - Country - - -", response);
        const data = await response.json();
        // console.log("- - - Data - - -", data.country_code)
        setCountryCode(data.country_code);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);



  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Navbar />
      {countryCode && (
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={12} country={countryCode} category={'general'} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={12} country={countryCode} category={'business'} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={12} country={countryCode} category={'entertainment'} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={12} country={countryCode} category={'health'} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={12} country={countryCode} category={'science'} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={12} country={countryCode} category={'sports'} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={12} country={countryCode} category={'technology'} />} />
        </Routes>
      )}
    </div>
  );
}
export default App;