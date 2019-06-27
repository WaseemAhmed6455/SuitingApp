import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigator, DrawerNavigator } from "react-navigation";

export default class Bottom extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const navigation = { navigation };
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: 100,
          bottom: 0,
          position: "absolute"
          //marginTop: 150
        }}
        source={require("../img/Bottom.png")}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <TouchableOpacity onPress={() => this.navigation.navigate("Home")}>
            <View style={{ bottom: 0, marginTop: 40 }}>
              <Image
                source={require("../img/home.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ fontSize: 12 }}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.navigation.navigate("Products")}
          >
            <View
              style={{
                bottom: 0,
                marginTop: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../img/Discover.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ fontSize: 12 }}>Products</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.navigation.navigate("Products")}
          >
            <View
              style={{
                width: 70,
                height: 70,
                borderWidth: 5,
                borderColor: "#fffafa",
                borderRadius: 35,
                backgroundColor: "#0da9ef",
                elevation: 3,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginLeft: 4
              }}
            >
              <Image
                source={require("../img/sci.png")}
                style={{ width: 30, height: 30 }}
              />
              {/* <Icon
                name="cart-arrow-down"
                size={34}
                style={{
                  marginBottom: 8,
                  color: "white",
                  alignSelf: "center",
                  marginRight: 5
                }}
              /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.navigate("Cart")}>
            <View
              style={{
                bottom: 0,
                marginTop: 40,
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require("../img/Faviourate.png")}
                style={{ width: 30, height: 30, paddingLeft: 20 }}
              />
              <Text style={{ fontSize: 12 }}>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.navigation.navigate("Profile")}>
            <View style={{ bottom: 0, marginTop: 40, marginLeft: 10 }}>
              <Image
                source={require("../img/Profile.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ fontSize: 12 }}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
