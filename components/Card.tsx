import React, { useState } from "react";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage, Alert } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { register } from "../utils";

const Container = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 380px;
  background-color: white;
  elevation: 5;
`;

const Left = styled.View`
  width: 80%;
  height: 100%;
`;
const Right = styled.View`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const NameContainer = styled.View`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 50%;
`;
const Name = styled.Text`
  font-size: 18px;
  text-decoration-line: underline;
`;
const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
const PriceInfo = styled.Text<{ up: boolean }>`
  color: ${(props) => (props.up === "+" ? "#eb2f06" : "#4a69bd")};
  margin-right: 10px;
  font-size: 18px;
`;
const Text = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #218c74;
`;
const Touchable = styled.TouchableOpacity``;
interface Props {
  title: string;
  percent: string;
  price: string;
  link?: string;
}
const Card: React.FC<Props> = ({ percent, price, link, title }) => {
  const up = percent[0];
  const navigation = useNavigation();
  const goToLink = async () => {
    if (!link) return;
    const url = "https://finance.naver.com" + link;
    await WebBrowser.openBrowserAsync(url);
  };
  const registerCheckList = (title: string, link: string) => {
    Alert.alert("등록하시겠습니까?", "", [
      {
        text: "OK",
        onPress: async () => {
          const reg = await register(title, link);
          if (reg) {
            Alert.alert("등록되었습니다");
          } else {
            Alert.alert("이미 등록된 아이템입니다.");
          }
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };
  return (
    <Container>
      <Left>
        <NameContainer>
          <Name>{title}</Name>
        </NameContainer>
        <InfoContainer>
          <PriceInfo up={up}>{price}</PriceInfo>
          <PriceInfo up={up}>{percent}</PriceInfo>
        </InfoContainer>
      </Left>
      <Right>
        <Touchable
          onPress={() => {
            goToLink();
          }}
        >
          <Text>자세히</Text>
        </Touchable>

        <Touchable
          onPress={() => {
            registerCheckList(title, link);
          }}
        >
          <Text>즐겨찾기</Text>
        </Touchable>
      </Right>
    </Container>
  );
};

export default Card;
