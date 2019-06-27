import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Left, Right } from "native-base";
export default class Products extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
            flex: 1
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 170,
              height: 200,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              // borderWidth: 1,
              // borderRadius: 2,
              elevation: 1
              // borderColor: "#ddd",
              // borderBottomWidth: 0,
              // shadowColor: "#000",
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 0.8,
              // shadowRadius: 2,
              // marginBottom: 10
            }}
          >
            <TouchableOpacity style={{ width: "100%", height: "65%" }}>
              <Image
                source={require("../img/1.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "Fira Sans",
                fontWeight: "bold",
                fontSize: 16,
                color: "black"
              }}
            >
              Product Name
            </Text>
            <Text style={{ marginLeft: 10 }}>$692.2</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Right style={{ marginRight: 70 }} />
              <Left style={{ flexDirection: "row", marginRight: 10 }}>
                <Icon
                  name="shopping-cart"
                  size={24}
                  style={{ color: "black" }}
                />
                <Icon
                  name="heart-o"
                  size={24}
                  style={{ color: "black", marginLeft: 5 }}
                />
              </Left>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 170,
              height: 200,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              elevation: 3
            }}
          >
            <TouchableOpacity style={{ width: "100%", height: "65%" }}>
              <Image
                source={require("../img/1.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                fontFamily: "Fira Sans",
                fontWeight: "bold",
                fontSize: 16,
                color: "black"
              }}
            >
              Product Name
            </Text>
            <Text style={{ marginLeft: 10 }}>$692.2</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Right style={{ marginRight: 70 }} />
              <Left style={{ flexDirection: "row", marginRight: 10 }}>
                <Icon
                  name="shopping-cart"
                  size={24}
                  style={{ color: "black" }}
                />
                <Icon
                  name="heart-o"
                  size={24}
                  style={{ color: "black", marginLeft: 5 }}
                />
              </Left>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
