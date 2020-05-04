import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FlatList } from "react-native-gesture-handler";

const Text = styled.Text`
  font-size: 30px;
`;
const sliceLength = 20;
const renderItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);
const randomKey = (): string => {
  return (Math.random() * 10000000).toString();
};
const Temp = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const golden = useSelector((state: RootState) => state.stockReducer.goldenCross);
  const handleReach = () => {
    if (page * sliceLength > golden.length) return;
    setPage((page) => page + 1);
    const startIndex = page * sliceLength;
    const endIndex = (page + 1) * sliceLength;

    setData([...data, ...golden.slice(startIndex, endIndex)]);
  };
  console.log(page);
  useEffect(() => {
    setPage(0);
    setData(golden.slice(0, 20));
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.link + randomKey()}
      onEndReached={handleReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Temp;
