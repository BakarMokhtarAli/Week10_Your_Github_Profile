import React from "react";
import "./About.css";
import { Link, Route, Router, Routes, useParams } from "react-router-dom";

function About(props) {
  const { about } = props;
  //console.log(about);

  //const location = useLocation();
  const params = useParams();
  console.log(params);

  return (
    <div className="repos">
      {about.map((item) => {
        if (item.language) {
          return (
            <Link
              to={`/about/https://api.github.com/users/BakarMokhtarAli/${item.name}`}
            >
              <div key={item.id} className="repo">
                <h1>{item.name}</h1>
                <p>{item.full_name}</p>
                <h4>{item.language}</h4>
                <p className="public">{item.visibility}</p>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default About;
