import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Cart from "./Cart";
import Home from "./Home";
export default class BottomTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Cart: Cart
});

export default createAppContainer(TabNavigator);
