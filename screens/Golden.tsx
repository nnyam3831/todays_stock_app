import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ScrollView } from "react-native";
import Card from "../components/Card";
import GoldenList from "../components/GoldenList";

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
  display: flex;
  padding-bottom: 30px;
`;
const Golden = () => {
  const goldenData = useSelector((state: RootState) => state.stockReducer.goldenCross);
  console.log(goldenData.length);
  return (
    <Container>
      <Header>
        <Text>Golden Cross</Text>
      </Header>
      <ScrollView>
        <GoldenList goldenData={goldenData.slice(0, 20)} />
      </ScrollView>
    </Container>
  );
};

export default Golden;
