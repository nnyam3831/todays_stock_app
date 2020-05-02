import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 170px;
  width: 170px;
  background-color: white;
  justify-content: center;
  align-items: center;
  elevation: 5;
  margin-right: 10px;
  margin-left: 10px;
`;
const Text = styled.Text``;
const Grid = () => {
  return (
    <Container>
      <Text>그리드</Text>
    </Container>
  );
};

export default Grid;
