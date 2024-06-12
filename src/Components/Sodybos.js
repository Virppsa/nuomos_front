import React, { useState } from 'react';
import './sodybos.css';

const trails = [
  {
    id: 1,
    river: 'Visinčia',
    name: 'Maršrutas 1',
    description: 'This is the description for Trail 1 on the Visinčia river.',
    image: '/map1.jpg'
  },
  {
    id: 2,
    river: 'Visinčia',
    name: 'Maršrutas 2',
    description: 'This is the description for Trail 2 on the Visinčia river.',
    image: 'map2.jpg'
  },
  {
    id: 3,
    river: 'Visinčia',
    name: 'Maršrutas 3',
    description: 'This is the description for Trail 3 on the Visinčia river.',
    image: 'map3.jpg'
  },
  {
    id: 4,
    river: 'Merkys',
    name: 'Maršrutas 1',
    description: 'This is the description for Trail 1 on the Merkys river.',
    image: 'map4.jpg'
  },
  {
    id: 5,
    river: 'Merkys',
    name: 'Maršrutas 2',
    description: 'This is the description for Trail 2 on the Merkys river.',
    image: 'map5.jpg'
  },
  {
    id: 6,
    river: 'Merkys',
    name: 'Maršrutas 3',
    description: 'This is the description for Trail 3 on the Merkys river.',
    image: 'map6.jpg'
  }
];

function Sodybos() {
  const [selectedTrail, setSelectedTrail] = useState(trails[0]);

  return (
    <div className="sodybos-container">
      <div className="sodybos-sidebar">
        <video className="background-video3" autoPlay loop muted>
          <source src="/sodyba_video_dronai.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="button-box">
          <h2>Upė Visinčia</h2>
          {trails.filter(trail => trail.river === 'Visinčia').map(trail => (
            <button
              key={trail.id}
              className={`trail-button ${selectedTrail.id === trail.id ? 'active' : ''}`}
              onClick={() => setSelectedTrail(trail)}
            >
              {trail.name}
            </button>
          ))}
        </div>
        <div className="button-box">
          <h2>Upė Merkys</h2>
          {trails.filter(trail => trail.river === 'Merkys').map(trail => (
            <button
              key={trail.id}
              className={`trail-button ${selectedTrail.id === trail.id ? 'active' : ''}`}
              onClick={() => setSelectedTrail(trail)}
            >
              {trail.name}
            </button>
          ))}
        </div>
      </div>
      <div className="sodybos-content">
        <img src={selectedTrail.image} alt={selectedTrail.name} className="trail-image" />
        <h3>{selectedTrail.name}</h3>
        <p>{selectedTrail.description}</p>
      </div>
    </div>
  );
}

export default Sodybos;
