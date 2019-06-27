import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";

export default class ProductDetail extends Component {
  state = { user: "" };
  updateUser = user => {
    this.setState({ user: user });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View>
          <ImageBackground
            source={require("../img/1.jpg")}
            style={{
              width: "100%",
              alignSelf: "center",
              height: 300,
              resizeMode: "cover",
              // marginTop: 10,
              borderRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image
                source={require("../img/cross.png")}
                style={{ width: 20, height: 20, margin: 15 }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Fira Sans",
              color: "black",
              marginTop: 20
            }}
          >
            Berry, Blue and Forest Check
          </Text>
          <Text style={{ alignSelf: "center" }}>$69.00</Text>

          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Fira Sans",
              color: "black",
              marginTop: 80,
              justifyContent: "space-evenly",
              alignSelf: "center",
              fontSize: 15,
              textAlign: "center"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and{"\n"}type
            setting industry. Lorem Ipsum has been the {"\n"}industry's standard
          </Text>
        </View>
        {/* button and other context */}
        <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}>
          <TouchableOpacity
            style={{
              width: 100,
              height: 50,
              backgroundColor: "#3ca9f8",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 7
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>Add To Cart</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "bold",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 15
              }}
            >
              +
            </Text>
            <TextInput
              style={{
                width: 40,
                height: 40,
                borderColor: "#bebfc0",
                borderWidth: 2,
                marginTop: 10,
                color: "black"
              }}
            />
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "bold",
                marginLeft: 10,
                marginRight: 10,
                marginTop: 15
              }}
            >
              -
            </Text>
            <Picker
              selectedValue={this.state.user}
              onValueChange={this.updateUser}
              style={{ marginLeft: 20, width: 80, height: 30, marginTop: 10 }}
            >
              <Picker.Item label="M" value="Medium" />
              <Picker.Item label="S" value="Small" />
              <Picker.Item label="L" value="Large" />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
