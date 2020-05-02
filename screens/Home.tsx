import React, { useEffect, useState } from "react";
import { Text, ScrollView, ActivityIndicator, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Title from "../components/Title";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import api from "../api";
import { getGoldenCross, getRise, getSearch, getKOS } from "../redux/stockSlice";
import RefreshBtn from "../components/RefreshBtn";
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
`;
const Body = styled.View`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;
const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const getStockInfo = async () => {
    try {
      setRefresh(true);
      await api.init();
      dispatch(getGoldenCross());
      dispatch(getRise());
      dispatch(getSearch());
      dispatch(getKOS());
    } catch (e) {
      console.error;
    } finally {
      setLoading(true);
      setRefresh(false);
    }
  };
  const riseData = useSelector((state: RootState) => state.stockReducer.rise);
  const kos = useSelector((state: RootState) => state.stockReducer.kos);
  useEffect(() => {
    getStockInfo();
  }, []);

  return loading ? (
    <Container>
      <Header>
        <Title title={"코스피"} price={kos?.kospi_now} percent={kos?.kospi_change} />
        <Title title={"코스닥"} price={kos?.kosdaq_now} percent={kos?.kosdaq_change} />
      </Header>
      {refresh ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Body>
            {riseData?.map((rise) => (
              <Card key={rise.title} {...rise} />
            ))}
          </Body>
        </ScrollView>
      )}
      <RefreshBtn onPress={getStockInfo} />
    </Container>
  ) : (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Home;
