import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <h1 className="mt-2 mb-4">welcome to battle</h1>
          <Dashboard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
