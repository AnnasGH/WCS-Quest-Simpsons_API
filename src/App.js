import './App.css';
import axios from 'axios';
import React, {useState} from 'react';
import DisplaySimpson from './components/DisplaySimpson';

const testSimpson = {
  quote: "Gah, stupid sexy Flanders!",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
}

function App() {

  const [newSimpson, setNewSimpson] = useState(testSimpson)

  const moreSimpson = () => {

    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {setNewSimpson(data[0]);
    });
  };

  return (
    <div className="App">
      <DisplaySimpson simpson={newSimpson}/>
      <div id="button">
        <button type="button" onClick={moreSimpson}>One more!</button>
      </div>
    </div>
  );
}

export default App;
