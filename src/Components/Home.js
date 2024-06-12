import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="/video_sodyba.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="text-container">
          <p className="text">Sodybų ir baidarių nuoma jums!</p>
        </div>
      </div>
      <div className="content">
        {/* Add any additional content here */}
      </div>
    </div>
  );
}

export default Home;
