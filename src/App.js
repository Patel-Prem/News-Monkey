import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";

function App() {

  const [countryCode, setCountryCode] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const url = `https://ipapi.co/json/`;
      try {
        const response = await fetch(url);
        console.log("- - - Country - - -", response);
        const data = await response.json();
        console.log("- - - Data - - -", data.country_code)
        setCountryCode(data.country_code);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);



  return (
    <div>
      <Navbar />
      {countryCode && (
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={12} country={countryCode} category={'general'} />} />
          <Route exact path="/business" element={<News key="business" pageSize={12} country={countryCode} category={'business'} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} country={countryCode} category={'entertainment'} />} />
          <Route exact path="/health" element={<News key="health" pageSize={12} country={countryCode} category={'health'} />} />
          <Route exact path="/science" element={<News key="science" pageSize={12} country={countryCode} category={'science'} />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={12} country={countryCode} category={'sports'} />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={12} country={countryCode} category={'technology'} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
