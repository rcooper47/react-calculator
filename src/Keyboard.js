import React from "react";
import ReactDOM from "react-dom";
import "./Key.css";
class Keyboard extends React.Component {
    render() {
        return(
        <div>
            <button  className="num">1</button>
            <button  className="num">2</button>
            <button  className="num">3</button>
            <button  className="num">4</button>
            <button  className="num">5</button>
            <button  className="num">6</button>
            <button  className="num">7</button>
            <button  className="num">8</button>
            <button  className="num">9</button>
            <button  className="num">0</button>
            <button  className="operator">&times;</button>
            <button  className="operator">&divide;</button><button  className="num">1</button>
            <button  className="operator">//</button>
            <button  className="operator">AC</button>
            <button  className="operator">+/-</button>
            <button  className="operator">=</button>
            <button  className="operator">.</button>
            <button  className="operator">-</button>
            <button  className="operator">+</button>
            </div>
        );
    }
};

export default Keyboard;