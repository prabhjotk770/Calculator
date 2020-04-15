import React from "react";
import "./styles.css";
import DenseAppBar from "./Header";
let number = "";
let count = 0;
export default class App extends React.Component {
  state = {
    number: ""
  };

  numberCalc = n => {
    if (n === "+" || n === "*" || n === "/" || n === "-") {
      count++;
      if (count >= 2) {
        n = "";
      }
    }
    number += n;
    this.setState({ number: number });
  };

  clear = () => {
    count = 0;
    this.setState({ number: "" });
    number = "";
  };

  result = () => {
    count = 0;
    this.setState({ number: eval(this.state.number) });
    number = eval(this.state.number);
  };

  backspace = () => {
    this.setState({ number: this.state.number.slice(0, -1) });
    number = number.slice(0, -1);
  };

  render() {
    return (
      <div>
        <DenseAppBar />
        <div>
          <div className="txt">
            <h3 style={{ marginLeft: "3px" }}>{this.state.number}</h3>
          </div>
        </div>
        <div>
          <button
            className="btn"
            name="1"
            onClick={e => this.numberCalc(e.target.name)}
          >
            1
          </button>
          <button className="btn" onClick={() => this.numberCalc("2")}>
            2
          </button>
          <button className="btn" onClick={() => this.numberCalc("3")}>
            3
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => this.numberCalc("4")}>
            4
          </button>
          <button className="btn" onClick={() => this.numberCalc("5")}>
            5
          </button>
          <button className="btn" onClick={() => this.numberCalc("6")}>
            6
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => this.numberCalc("7")}>
            7
          </button>
          <button className="btn" onClick={() => this.numberCalc("8")}>
            8
          </button>
          <button className="btn" onClick={() => this.numberCalc("9")}>
            9
          </button>
        </div>
        <button className="btn" onClick={() => this.numberCalc("+")}>
          +
        </button>
        <button className="btn" onClick={() => this.numberCalc("0")}>
          {" "}
          0{" "}
        </button>
        <button className="btn" onClick={() => this.numberCalc("-")}>
          -
        </button>

        <div>
          <button className="btn" onClick={() => this.numberCalc("*")}>
            *
          </button>
          <button className="btn" onClick={() => this.numberCalc("/")}>
            /
          </button>
          <button className="btn" onClick={() => this.backspace("CE")}>
            CE
          </button>
          <button className="btn" onClick={() => this.clear()}>
            Clear
          </button>
          <button
            className="btn"
            onClick={() => {
              this.result();
            }}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
