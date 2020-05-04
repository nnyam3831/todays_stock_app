import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Grid from "../components/Grid";
import GridLayOut from "react-native-grid-component";
import { getCheckList } from "../utils";
import { AsyncStorage, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import RefreshBtn from "../components/RefreshBtn";

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 80px;
  background-color: #fafafa;
  elevation: 8;
  height: 180px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Body = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 35px;
  padding-top: 10px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 120px;
`;

const Text = styled.Text`
  margin-top: 115px;
  font-weight: bold;
  font-size: 20px;
`;
const RfBtn = styled(RefreshBtn)``;
const renderItem = (list) => {
  if (!list) return list;
  return <Grid key={list.link} {...list} />;
};
const CheckList = ({ navigation }) => {
  const [list, setList] = useState([]);
  const getAsync = async () => {
    const data = await getCheckList();
    setList(data);
  };

  useEffect(() => {
    return () => getAsync();
  }, []);
  console.log("ㅠ");
  return (
    <Container>
      <Header>
        <Text>Check List</Text>
        <RfBtn onPress={() => getAsync()} />
      </Header>
      <Body>
        <GridLayOut
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, display: "flex", align: "center" }}
          renderItem={renderItem}
          data={list ? list : "no data"}
          numColumns={2}
        />
      </Body>
    </Container>
  );
};

export default CheckList;
