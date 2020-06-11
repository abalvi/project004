import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room(){
  const [isLit, setLit] = useState(false);
  const brightness = isLit ? "lit" : "dark";
  let [temp, tempIncrease] = useState(72);

return(
  <div className={`room ${brightness}`}>The room is {isLit ? "Lit" : "Dark"}
  <br />
  Temperatue is : {temp}
  <br />
  <button onClick={() => setLit(true)}> ON Button </button>
  <button onClick={() => setLit(false)}> OFF Button </button>
  <br />
  <button onClick={() => tempIncrease(++temp)}> "+" </button>
  <button onClick={() => tempIncrease(--temp)}> "-" </button>
  </div>
);
}

ReactDOM.render(
  <Room />,
  document.getElementById('root')
);

