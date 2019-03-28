import React from "react";
import ReactDOM from "react-dom";

import { FamilyProvider, FamilyConsumer } from "./FamilyContext";

import "./styles.css";

class Grandmother extends React.Component {
  state = {
    name: "Omid",
    age: 30
  };

  render() {
    return (
      <FamilyProvider value={{ name: this.state.name, age: this.state.age }}>
        <Mother />
      </FamilyProvider>
    );
  }
}

const Mother = () => {
  return (
    <div>
      <FirstChild />
      <SecondChild />
    </div>
  );
};

const FirstChild = () => {
  return (
    <FamilyConsumer>
      {context => <p>My name is {context.name}</p>}
    </FamilyConsumer>
  );
};

const SecondChild = () => {
  return (
    <FamilyConsumer>
      {context => <p>and I am {context.age} years old.</p>}
    </FamilyConsumer>
  );
};

function App() {
  return (
    <div className="App">
      <Grandmother />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
