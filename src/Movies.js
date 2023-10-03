import React from "react";
import "./Movies.css";

const Movies = (props) => {
  return (
    <>
        {/* <h2 className="genre">{props.genre}</h2> */}
    <div>
      <ul className="horizontal">
      {/* <section className="genre">
        <h2 >{props.genre}</h2>
      </section> */}
       
      
     
      <hr/>
      <section className="imgurl">
        <img  src={props.url} alt="Image" />
      </section>

      <section className="title">
        <span>{props.title}</span>
      </section>

      <section>
        <button className="button">
          <a href={props.watch}>Watch Now</a>
        </button>
      </section>
      </ul>
    </div>
      
    </>
  );
};

export default Movies;
