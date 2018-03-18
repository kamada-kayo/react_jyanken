//この２つのmoduleがないとJSXが変換されない
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

class JyankenGamePage extends Component {
  pon() {}

  render() {
    return (
      <div>
        <h1>じゃんけん　ポン！</h1>
        <JyankenBox actionPon={props => console.log(props)} />
        <ScoreBox />
      </div>
    );
  }
}

const JyankenBox = props => {
  return (
    <div>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>チョキ</button>
      <button onClick={() => props.actionPon(2)}>パー</button>
    </div>
  );
};

JyankenBox.propTypes = {
  actionPon: PropTypes.func
};
console.log(JyankenBox);

const ScoreBox = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>あなた</th>
        </tr>
        <tr>
          <th>Computer</th>
        </tr>
        <tr>
          <th>勝敗</th>
        </tr>
      </tbody>
    </table>
  );
};

ReactDOM.render(<JyankenGamePage />, document.getElementById("root"));
