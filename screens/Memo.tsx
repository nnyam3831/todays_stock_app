import React, { useEffect, useState } from "react";
import { View, Text, AsyncStorage } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

const Button = styled.Button``;
const Memo = ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  const [mode, setMode] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <Button
          title={!mode ? "수정" : "완료"}
          onPress={() => setMode((prev) => !prev)}
          color={!mode ? null : "red"}
        />
      ),
    });
  });

  return (
    <View style={{ flex: 1 }}>
      <TextInput style={{ width: "100%", height: "100%" }}>
        This is Memo screen of {title}
      </TextInput>
    </View>
  );
};

export default Memo;
