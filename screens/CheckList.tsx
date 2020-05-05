import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Grid from "../components/Grid";
import GridLayOut from "react-native-grid-component";
import { getCheckList } from "../utils";

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
const CheckList = ({ navigation }) => {
  const something = navigation.addListener("focus", (e) => {
    getAsync();
  });
  const [list, setList] = useState([]);
  const getAsync = async () => {
    const data = await getCheckList();
    setList(data);
  };
  const renderItem = (list) => {
    if (!list) return list;
    return <Grid key={list.link} {...list} refresh={getAsync} />;
  };

  useEffect(() => {
    return () => getAsync();
  }, []);
  return (
    <Container>
      <Header>
        <Text>Check List</Text>
      </Header>
      <Body>
        <GridLayOut
          extradata={getAsync}
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
