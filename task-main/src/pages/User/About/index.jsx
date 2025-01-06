import React from 'react';

function About() {
  return (
    <div className="container">
      <main className="main">
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We provide all kinds of fresh flower services.
            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.
          </p>
        </section>

        <section className="featured-section">
          <div className="image-container">
          
            <button className="play-button">
              <span className="play-icon">&#9654;</span>
            </button>
          </div>

          <div className="content-container">
            <h2>Slow Flowers' Floral Insights</h2>
            <h3>Dried flowers are having a renaissance</h3>
            <p>
              This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to "extend the season" beyond the last frost.
            </p>
            <button className="contact-us-button">Contact Us</button>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default About;