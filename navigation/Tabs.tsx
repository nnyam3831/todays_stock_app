import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SearchList from "../screens/SearchList";
import Golden from "../screens/Golden";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckList from "../screens/CheckList";

const TabsNavigator = createBottomTabNavigator();

const Tabs = ({ navigation, route }) => {
  return (
    <TabsNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Home") {
            iconName += "home";
          } else if (route.name === "SearchList") {
            iconName += "list";
          } else if (route.name === "Golden") {
            iconName += "shuffle";
          } else if (route.name === "CheckList") {
            iconName += "checkbox";
          }
          return <Ionicons name={iconName} color={focused ? "white" : "grey"} size={26} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "black" },
      }}
    >
      <TabsNavigator.Screen name="Home" component={Home} />
      <TabsNavigator.Screen name="SearchList" component={SearchList} />
      <TabsNavigator.Screen name="Golden" component={Golden} />
      <TabsNavigator.Screen name="CheckList" component={CheckList} />
    </TabsNavigator.Navigator>
  );
};
export default Tabs;
