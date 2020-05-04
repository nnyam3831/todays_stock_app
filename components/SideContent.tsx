import React from "react";
import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Card from "./Card";
import SideList from "./SideList";

const Container = styled.View`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const Header = styled.View`
  width: 70%;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
const Title = styled.Text`
  font-size: 20px;
`;
const SideContent = () => {
  return (
    <Container>
      <Header>
        <Title>인기검색어</Title>
      </Header>
      <SideList />
    </Container>
  );
};

export default SideContent;
