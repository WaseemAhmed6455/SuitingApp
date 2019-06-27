import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { tsExpressionWithTypeArguments } from "@babel/types";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          {/* <Text
            style={{
              marginTop: 10,
              marginBottom: 3,
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              elevation: 3
            }}
          >
            Your Cart
          </Text> */}
          <View
            style={{
              width: "90%",
              height: 200,
              backgroundColor: "white",
              elevation: 3,
              marginTop: 10,
              flexDirection: "column",
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <Icon
              name="times"
              size={20}
              style={{ left: "93%", marginTop: 5 }}
            />

            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/7.jpg")}
                style={{
                  width: 150,
                  height: 130,
                  resizeMode: "contain",
                  marginTop: 5
                }}
              />
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    marginBottom: 3,
                    fontSize: 16,
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Product Name
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Price : $250.0
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Color : Red
                </Text>
                <View style={{ flexDirection: "row", marginTop: 3 }}>
                  <Text style={{ marginTop: 8, fontFamily: "sans-serif" }}>
                    Qty:{" "}
                  </Text>
                  <TextInput
                    placeholder="Qty"
                    style={{
                      width: 50,
                      height: 40,
                      borderColor: "#e6e6e6",
                      borderWidth: 1
                    }}
                  />
                </View>
              </View>
            </View>
            {/* <TouchableOpacity
              style={{
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
                backgroundColor: "#0da9ef"
              }}
            >
              <Text>Go To CheckOut</Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              width: "90%",
              height: 200,
              backgroundColor: "white",
              elevation: 3,
              marginTop: 10,
              flexDirection: "column",
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <Icon
              name="times"
              size={20}
              style={{ left: "93%", marginTop: 5 }}
            />

            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/7.jpg")}
                style={{
                  width: 150,
                  height: 130,
                  resizeMode: "contain",
                  marginTop: 5
                }}
              />
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    marginBottom: 3,
                    fontSize: 16,
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Product Name
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Price : $250.0
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Color : Red
                </Text>
                <View style={{ flexDirection: "row", marginTop: 3 }}>
                  <Text style={{ marginTop: 8, fontFamily: "sans-serif" }}>
                    Qty:{" "}
                  </Text>
                  <TextInput
                    placeholder="Qty"
                    style={{
                      width: 50,
                      height: 40,
                      borderColor: "#e6e6e6",
                      borderWidth: 1
                    }}
                  />
                </View>
              </View>
            </View>
            {/* <TouchableOpacity
              style={{
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
                backgroundColor: "#0da9ef"
              }}
            >
              <Text>Go To CheckOut</Text>
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              width: "90%",
              height: 200,
              backgroundColor: "white",
              elevation: 3,
              marginTop: 10,
              flexDirection: "column",
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <Icon
              name="times"
              size={20}
              style={{ left: "93%", marginTop: 5 }}
            />

            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../img/7.jpg")}
                style={{
                  width: 150,
                  height: 130,
                  resizeMode: "contain",
                  marginTop: 5
                }}
              />
              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    marginBottom: 3,
                    fontSize: 16,
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Product Name
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Price : $250.0
                </Text>
                <Text style={{ marginBottom: 5, fontFamily: "sans-serif" }}>
                  Color : Red
                </Text>
                <View style={{ flexDirection: "row", marginTop: 3 }}>
                  <Text style={{ marginTop: 8, fontFamily: "sans-serif" }}>
                    Qty:{" "}
                  </Text>
                  <TextInput
                    placeholder="Qty"
                    style={{
                      width: 50,
                      height: 40,
                      borderColor: "#e6e6e6",
                      borderWidth: 1
                    }}
                  />
                </View>
              </View>
            </View>
            {/* <TouchableOpacity
              style={{
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
                backgroundColor: "#0da9ef"
              }}
            >
              <Text>Go To CheckOut</Text>
            </TouchableOpacity> */}
          </View>

          <View
            style={{
              width: "90%",
              height: 100,
              backgroundColor: "white",
              elevation: 3,
              marginTop: 10,
              flexDirection: "column",
              alignSelf: "center",
              marginBottom: 10
            }}
          >
            <View
              style={{ flexDirection: "row", marginTop: 10, marginBottom: 5 }}
            >
              <Text style={{ marginLeft: 20, marginRight: "20%" }}>
                Items : Count
              </Text>
              <Text style={{ right: 0 }}>CartSubtotal : $1542.0</Text>
            </View>
            <TouchableOpacity
              style={{
                width: "80%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 5,
                backgroundColor: "#0da9ef"
              }}
            >
              <Text>Go To CheckOut</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
