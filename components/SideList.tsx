import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import * as WebBrowser from "expo-web-browser";
const Container = styled.View`
  padding: 10px;
  padding-bottom: 50px;
  width: 100%;
`;
const Row = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  font-size: 18px;
`;
const Touchable = styled.TouchableOpacity``;
const SideList = () => {
  const data = useSelector((state: RootState) => state.stockReducer.search);
  const goToLink = async (link) => {
    if (!link) return;
    const url = "https://finance.naver.com" + link;
    await WebBrowser.openBrowserAsync(url);
  };
  const standString = (text: string): string => {
    if (text.length <= 8) {
      return text;
    }
    return `${text.substring(0, 8)}...`;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {data?.map((search) => {
          return (
            <Row key={search.link}>
              <Touchable
                onPress={() => {
                  goToLink(search.link);
                }}
              >
                <Text>{standString(search.title)}</Text>
              </Touchable>
            </Row>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export default SideList;
