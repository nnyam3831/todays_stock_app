import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 150px;
  background-color: white;
  justify-content: center;
  align-items: center;

  elevation: 3;
  margin-right: 10px;
  margin-left: 10px;
`;
const Text = styled.Text<{ name: boolean }>`
  margin-top: 10px;
  font-size: ${(props) => (props.name ? "15px" : "12px")};
`;

interface Props {
  title: string;
  link: string;
  date: string;
}
const Grid: React.FC<Props> = ({ title, link, date }) => {
  const navigation = useNavigation();
  const goToLink = async (link) => {
    if (!link) return;
    const url = "https://finance.naver.com" + link;
    await WebBrowser.openBrowserAsync(url);
  };
  const goToMemo = () => {
    navigation.navigate("Memo", { title: title, content: "ㅋㅋㅋ" });
  };
  return (
    <TouchableOpacity onPress={() => goToLink(link)} onLongPress={() => goToMemo()}>
      <Container>
        <Text name>{title}</Text>
        <Text>{`${date} 등록`}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Grid;
