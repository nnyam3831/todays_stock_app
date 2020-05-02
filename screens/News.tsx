import React, { useEffect } from "react";
import { View, Text, AsyncStorage } from "react-native";

const News = ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const save = async () => {
    await AsyncStorage.setItem("value", "hahaha");
  };
  useEffect(() => {
    try {
      const h = async () => {
        await save();
      };
      h();
    } catch (e) {
      console.log(e);
    }
  });
  return (
    <View>
      <Text>This is news screen of {title}</Text>
    </View>
  );
};

export default News;
