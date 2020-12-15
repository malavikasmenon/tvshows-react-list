import React, { useState } from "react";
import "./styles.css";

const recommendation = {
  Sitcom: [
    { name: "Schitt's Creek", streamingOn: "Netflix", rating: "5/5" },
    {
      name: "Modern Family",
      streamingOn: "Hotstar",
      rating: "4.5/5"
    },
    {
      name: "F.R.I.E.N.D.S",
      streamingOn: "Netflix",
      rating: "4.5/5"
    },
    {
      name: "The Bing Bang Theory",
      streamingOn: "Netflix",
      rating: "3/5"
    }
  ],

  "Medical Drama": [
    {
      name: "House",
      streamingOn: "Prime",
      rating: "3.5/5"
    },
    {
      name: "Grey's Anatomy",
      streamingOn: "Prime & Hotstar",
      rating: "3.5/5"
    }
  ],

  Thrillers: [
    {
      name: "Locke & Key",
      streamingOn: "Netflix",
      rating: "4/5"
    },
    {
      name: "Mentalist",
      streamingOn: "Prime",
      rating: "3.5/5"
    }
  ],

  Drama: [
    {
      name: "This Is Us",
      streamingOn: "Prime",
      rating: "4/5"
    },
    {
      name: "Jane The Virgin",
      streamingOn: "Netflix",
      rating: "3.5/5"
    }
  ],

  Indian: [
    {
      name: "Made In Heaven",
      streamingOn: "Prime",
      rating: "4.5/5"
    },
    {
      name: "Mismatched",
      streamingOn: "Netflix",
      rating: "3.5/5"
    }
  ]
};

var buttonList = Object.keys(recommendation);

export default function App() {
  const [genre, setGenre] = useState("Sitcom");
  function clickHandler(item) {
    setGenre(item);
  }
  return (
    <div className="App">
      <h1>📺 TV Shows </h1>
      <p>
        {" "}
        Check out a few of my TV Show recommendations from different genres!{" "}
      </p>
      {buttonList.map((item) => {
        return <button onClick={() => clickHandler(item)}>{item}</button>;
      })}
      <hr />
      <div>
        <ul>
          {recommendation[genre].map((item) => (
            <li key={item.name}>
              <div id="show-name"> {item.name} </div>
              <div id="streaming"> Available on: {item.streamingOn} </div>
              <div id="rating"> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
