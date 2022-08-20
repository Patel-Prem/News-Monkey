import React from "react";
import '../Assets/Style/Spinner.css';
import loadder from '../Assets/GIF/loading.gif';

export default function LoadingSpinner() {
  return (

    <div className="spinner-container">
      {/* <div className="loading-spinner">
      </div> */}

      <img src={loadder} alt="loadder" className="loading-spinner-gif" />

    </div>
  );
}