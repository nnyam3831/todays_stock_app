import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Touchable = styled.TouchableOpacity`
  background-color: #218c74;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 99;
  border-radius: 99px;
  bottom: 40px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: white;
`;

interface Props {
  onPress?: () => any;
}
const RefreshBtn: React.FC<Props> = ({ onPress }) => {
  return (
    <Touchable
      onPress={onPress}
      activeOpacity={0.6}
      onLongPress={() => {
        console.log("롱롱ㅋ");
      }}
    >
      <Ionicons
        name={Platform.OS === "ios" ? "ios-refresh" : "md-refresh"}
        size={28}
        color={"white"}
      />
    </Touchable>
  );
};

export default RefreshBtn;
