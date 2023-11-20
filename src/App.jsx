import { useState } from "react";
import { nanoid } from 'nanoid';
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [lorem, setLorem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLorem = data.slice(0, parseInt(count));
    setLorem(newLorem);
  }


  return <section className="section-center">
    <h4>Tired of boring Lorem Ipsum?</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="paragraphs">Paragraphs:</label>
      <input type="number" min={1} max={8} step={1} id='paragraphs' name="paragraphs" defaultValue={1} onChange={(e => setCount(e.target.value))}/>
      <button type="submit" className="btn">Generate</button>
    </form>
    <div className="lorem-text">
      {lorem.map((paragraph) => {
        const id = nanoid();
        return <p key={id}>{paragraph}</p>
      })}
    </div>
    </section>;
};
export default App;
