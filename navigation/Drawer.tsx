import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import SideContent from "../components/SideContent";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator drawerContent={SideContent} drawerStyle={{ width: 200 }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
