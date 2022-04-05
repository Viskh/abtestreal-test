import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { store } from "./redux/configureStore";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
