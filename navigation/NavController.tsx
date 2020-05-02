import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SearchList from "../screens/SearchList";
import Golden from "../screens/Golden";
import { NavigationContainer } from "@react-navigation/native";

const TabsNavigator = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <TabsNavigator.Navigator>
        <TabsNavigator.Screen name="Home" component={Home} />
        <TabsNavigator.Screen name="SearchList" component={SearchList} />
        <TabsNavigator.Screen name="Golden" component={Golden} />
      </TabsNavigator.Navigator>
    </NavigationContainer>
  );
};
export default Tabs;
