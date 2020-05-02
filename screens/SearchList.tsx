import React, { useState, useEffect } from "react";
import { Text, AsyncStorage } from "react-native";

const SearchList = () => {
  const [temp, setTemp] = useState("");
  const get = async () => {
    const data = await AsyncStorage.getItem("value");
    console.log(data);
  };
  useEffect(() => {
    get();
  }, []);
  return <Text>SearchList</Text>;
};

export default SearchList;
