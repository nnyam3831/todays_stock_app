import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ScrollView, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import GoldenList from "../components/GoldenList";
import { FlatList } from "react-native-gesture-handler";
import { randomKey } from "../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
  background-color: #fafafa;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 30px;
  background-color: #fafafa;
  elevation: 8;
  height: 90px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  margin-top: 25px;
  font-weight: bold;
  font-size: 20px;
`;
const Body = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 100px;
  padding-left: 15px;
`;
const sliceLength = 20;
const renderItem = ({ item }) => {
  return <Card {...item} />;
};
const Golden = () => {
  const goldenData = useSelector((state: RootState) => state.stockReducer.goldenCross);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const handleData = () => {
    if (page * sliceLength > goldenData.length) {
      setLoading(true);
      return;
    }
    setLoading(true);
    const startIndex = page * sliceLength;
    const endIndex = (page + 1) * sliceLength;
    setPage(page + 1);
    setData([...data, ...goldenData.slice(startIndex, endIndex)]);
    setLoading(false);
  };

  useEffect(() => {
    setData([]);
    setPage(1);
    setData(goldenData.slice(0, 20));
  }, []);

  return (
    <Container>
      <Header>
        <Text>Golden Cross</Text>
      </Header>
      <Body>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.link + randomKey()}
          onEndReached={handleData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            loading ? null : <ActivityIndicator size="large" animating />
          }
        />
      </Body>
    </Container>
  );
};

export default Golden;
