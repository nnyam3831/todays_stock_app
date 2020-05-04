import React from "react";
import styled from "styled-components/native";
import Card from "./Card";

const Body = styled.View`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;
const GoldenList = ({ goldenData }) => {
  return (
    <Body>
      {goldenData?.map((data) => (
        <Card key={data.link} {...data} />
      ))}
    </Body>
  );
};

export default GoldenList;
