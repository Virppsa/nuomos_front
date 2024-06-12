import React from 'react';
import './baidares.css';
//import './baidares2.css';

function Baidares() {
  return (
    <div className="baidares-container">
      <video className="background-video2" autoPlay loop muted>
        <source src="/sodyba_video_dronai.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="content">
        <h1>Baidarės Page</h1> 
      </div> */}
      <div className="blocks-container">
        <div className="block">
          <img src="/zuikio_namas.jpg" alt="Zuikio Namas" />
          <h3>Zuikio namas</h3>
          <p>Turi 40 miegamų vietų.</p>
          <h3>Kainos:</h3>
          <p>I-IV – 350 €, V-VI – 550 €</p>
          <p>Su pirtimi +70 €</p>
          <p>Didysis Kubilas su masažine funkcija € +85</p>
          <button>Rezervuoti</button>
        </div>
        <div className="block">
          <img src="/profesoriaus_namas.png" alt="Zuikio Namas" />
          <h3>Profesoriaus namas</h3>
          <p>Turi 40 miegamų vietų.</p>
          <h3>Kainos:</h3>
          <p>I-IV – 300 €, V-VI – 500 €</p>
          <p>Su pirtimi +70 €</p>
          <p>Didysis Kubilas su masažine funkcija € +85</p>
          <button>Rezervuoti</button>
        </div>
        <div className="block">
          <img src="/prie_azuolo.png" alt="Zuikio Namas" />
          <h3>Namas prie ąžuolo</h3>
          <p>Turi 15 miegamų vietų.</p>
          <h3>Kainos:</h3>
          <p>I-IV – 250 €, V-VI – 350 €</p>
          <p>Su pirtimi +70 €</p>
          <p>Didysis Kubilas su masažine funkcija € +85</p>
          <button>Rezervuoti</button>
        </div>
        <div className="block">
          <img src="/rola.jpg" alt="Zuikio Namas" />
          <h3>Rola kambariai</h3>
          <p>Turi 3 miegamas vietas.</p>
          <h3>Kainos:</h3>
          <p>I-VII – 72 €</p>
          <p>Su pirtim +70 €</p>
          <p>Didysis Kubilas su masažine funkcija € +85</p>
          <button>Rezervuoti</button>
        </div>
      </div>
    </div>
  );
}

export default Baidares;
