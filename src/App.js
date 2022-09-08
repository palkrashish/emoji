import { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😚": "Kissing Face with Closed Eyes",
  "😋": "Face Savoring Food",
  "🤔": "Thinking Face",
  "👌": "OK Hand",
  "🤙": "Call Me Hand",
  "🧑‍🎤": "Singer",
  "🩸": "Drop of Blood"
};
var emojisWeKnow = Object.keys(emojiDictonary);

export default function App() {
  const [meaning, setMenaing] = useState("");

  function emojiInputHandler(event) {
    //processing code
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our data";
    }
    setMenaing(meaning); // output
  }
  function emojiClickHandler(emoji) {
    // processing code
    var meaning = emojiDictonary[emoji];
    setMenaing(meaning); //output
  }

  return (
    <div className="App">
      <h1>Inside output</h1>

      <input placeholder=" eg.  😀" onChange={emojiInputHandler} />

      <h2 className="Result">{meaning} </h2>
      {/* Actual output set by React using useState */}
      <h2>emoji we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
