import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView
} from "react-native";

export default class ProductsList extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text
          style={{
            margin: 10,
            fontWeight: "bold",
            fontSize: 20,
            alignSelf: "center",
            color: "black"
          }}
        >
          Products List
        </Text>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-evenly",
              flex: 1,
              backgroundColor: "white",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-evenly",
              flex: 1,
              backgroundColor: "white",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-evenly",
              flex: 1,
              backgroundColor: "white",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-evenly",
              flex: 1,
              backgroundColor: "white",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 170,
                height: 170,
                elevation: 3,
                borderRadius: 10,
                // marginLeft: 5,
                marginBottom: 10
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ProductList")}
              >
                <Image
                  source={require("../img/11.jpg")}
                  style={{
                    width: "99%",
                    margin: 1,
                    height: 100,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                />
              </TouchableOpacity>
              <View style={{ margin: 15 }}>
                <Text
                  style={{ fontSize: 14, color: "black", fontWeight: "bold" }}
                >
                  Professional Dress
                </Text>
                <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                  This is a professional Dummy
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
