import React from "react";
import "./Box.css";

const Box = () => {
  return (
    <div className="testimonials-container">
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <h1>If you do the job badly enough, sometimes you don't get asked to do it again.</h1>
          </blockquote>
          <h3>Wisteria Ravenclaw</h3>
          <h4>Google Inc.</h4>
        </figcaption>
      </figure>
      <figure className="snip1533">
        {/* ... Other testimonial blocks */}
      </figure>
      {/* Add more figure blocks as needed */}
    </div>
  );
};

export default Box;
