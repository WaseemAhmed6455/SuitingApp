import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import First from "./First";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import BuyNow from "./Screens/BuyNow";
import Sale from "./Screens/Sale";
import ProductDetail from "./Screens/ProductDetail";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import ProductList from "./Screens/ProductsList";
import Bottom from "./Screens/Bottom";
import Profile from "./Screens/Profile";
import Cart from "./Screens/Cart";
export default class App extends Component {
  render() {
    return <HomeStack />;
  }
}
const HomeStack = createStackNavigator(
  {
    First: First,
    Home: Home,
    Products: Products,
    ProductDetail: ProductDetail,
    ProductList: ProductList,
    Bottom: Bottom
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
// const ProductsStack = createStackNavigator(
//   {
//     Bottom: Bottom,
//     ProductList: ProductList,
//     Products: Products,
//     BuyNow: BuyNow,
//     ProductDetail: ProductDetail
//   },
//   {
//     navigationOptions: {
//       header: null
//     }
//   }
// );

// const AuthStack = createStackNavigator(
//   {
//     First: {
//       screen: First
//     },
//     Home: {
//       screen: Home
//     }
//   },
//   {
//     navigationOptions: {
//       header: null
//     }
//   }
// );

// const SwitchNavigator = createSwitchNavigator({
//   Auth: AuthStack,
//   App: HomeStack
// });
// // const Navigator = createStackNavigator(
//   {
//     //  ProductDetail: ProductDetail,
//     //Cart: Cart,
//     First: First,
//     Home: Home,
//     Products: Products,
//     Sale: Sale,
//     BuyNow: BuyNow,
//     Bottom: Bottom,
//     ProductDetail: ProductDetail,
//     ProductList: ProductList
//   },
//   {
//     navigationOptions: {
//       header: null
//     }
//   }
// );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
