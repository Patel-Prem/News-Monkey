import React from "react";
import '../Assets/Style/Spinner.css';
import loadder from '../Assets/GIF/loading.gif';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">

      <img src={loadder} alt="loader" className="loading-spinner-gif" />

    </div>
  );
}
