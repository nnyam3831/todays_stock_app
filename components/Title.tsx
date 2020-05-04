import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  width: 50%;
  height: 30px;
`;
const Main = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
const Sub = styled.Text<{ up: string }>`
  color: ${(props) => (props.up === "+" ? "#eb2f06" : "#4a69bd")};
  font-size: 13px;
  margin-right: 10px;
`;
const Row = styled.View`
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

interface Props {
  title: string;
  percent: string;
  price: string;
}
const Title: React.FC<Props> = ({ percent, price, title }) => {
  let per = "loading";
  per = percent?.split(" ")[1];
  per = per.substr(0, per.length - 2);
  let up;
  if (per) {
    up = per[0];
  } else {
    up = "";
  }
  return (
    <Container>
      <Main>{title}</Main>
      <Row>
        <Sub up={up}>{price}</Sub>
        <Sub up={up}>{per}</Sub>
      </Row>
    </Container>
  );
};

export default Title;
