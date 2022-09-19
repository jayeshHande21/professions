import "./styles.css";
import React, { useState } from "react";

var signDictionary = {
  "👮🏽‍♂️": "locomotive",
  "🕵🏽‍♀️": "Magician",
  "👷🏽‍♂️": "Labour",
  "👩🏽‍⚕️": "Doctor",
  "👩🏽‍🎓": "Lawyer",
  "👩🏽‍🏫": "Teacher",
  "👩🏽‍⚖️": "Judge",
  "👩🏽‍🌾": "Gardener",
  "👩🏽‍🍳": "Cook",
  "👩🏽‍💻": "Coder",
  "👩🏽‍🎨": "Painter",
  "👩🏽‍✈️": "Piolet",
  "👨🏽‍🚀": "Astronaut",
  "👰🏽": "Bride",
  "🧙🏽‍♀️": "Princes",
  "🧛🏽‍♀️": "Yampier"
};

var signsWeKnow = Object.keys(signDictionary);

export default function App() {
  var [meaning, Setmeaning] = useState(" ");

  function inputHandlerEvent(event) {
    var userInput = event.target.value;
    meaning = signDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our DataBase";
    }
    Setmeaning(meaning);
  }
  function signClickHandler(sign) {
    var meaning = signDictionary[sign];
    Setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "black", fontFamily: "cursive" }}>
        Check Different Professions
      </h1>
      <input onChange={inputHandlerEvent}></input>
      <div>
        <h2 style={{ color: "grey", fontFamily: "cursive" }}>
          profession We Know
        </h2>

        {signsWeKnow.map(function (sign) {
          return (
            <span
              onClick={() => signClickHandler(sign)}
              style={{ padding: "1rem", fontSize: "30px", cursor: "pointer" }}
              key={sign}
            >
              {sign}
            </span>
          );
        })}
      </div>
      <h2>{meaning}</h2>
    </div>
  );
}
