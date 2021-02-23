import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("data ", data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
