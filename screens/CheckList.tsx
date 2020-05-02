import React from "react";
import styled from "styled-components/native";
import Grid from "../components/Grid";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fafafa;
`;
const Body = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0 auto;
  background-color: red;
`;
const CheckList = () => {
  return (
    <Container>
      <Body>
        <Grid />
      </Body>
    </Container>
  );
};

export default CheckList;
