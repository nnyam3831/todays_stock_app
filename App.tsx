import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import Axios from "axios";
import api from "./api";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./redux/store";
import { getGoldenCross } from "./redux/stockSlice";
export default function App() {
  const [list, setList] = useState(null);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
