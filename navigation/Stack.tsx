import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import News from "../screens/News";

const StackNavigator = createStackNavigator();

const Stack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerLeft: null,
      }}
    >
      <StackNavigator.Screen name="Tab" component={Tabs} options={{ headerShown: false }} />
      <StackNavigator.Screen name="News" component={News} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
