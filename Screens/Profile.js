import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            width: "100%",
            height: 50,
            elevation: 3,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            My Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            marginTop: 20,
            marginLeft: 10
          }}
        >
          <Image
            source={require("../img/6.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "contain"
            }}
          />
          <View style={{ marginLeft: 15, marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
              Name User
            </Text>
            <Text>Profile Discription is Given Here !</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 0.5,
            borderWidth: 0.5,
            color: "#dedede",
            marginTop: 10
          }}
        />
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              marginBottom: 5,
              color: "grey",
              fontSize: 18,
              fontFamily: "sans-sarif"
            }}
          >
            First Name
          </Text>
          <TextInput placeholder=" First Name" style={styles.textInput} />
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              marginBottom: 5,
              color: "grey",
              fontSize: 18,
              fontFamily: "sans-sarif"
            }}
          >
            Last Name
          </Text>
          <TextInput placeholder="Last Name" style={styles.textInput} />
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              marginBottom: 5,
              color: "grey",
              fontSize: 18,
              fontFamily: "sans-sarif"
            }}
          >
            Email Address
          </Text>
          <TextInput placeholder="Email Address" style={styles.textInput} />
        </View>
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              marginBottom: 5,
              color: "grey",
              fontSize: 18,
              fontFamily: "sans-sarif"
            }}
          >
            Postal Address
          </Text>
          <TextInput placeholder=" Postal Address" style={styles.textInput} />
        </View>

        <TouchableOpacity
          style={{
            width: 120,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "#0da9ef"
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#dedede",
    backgroundColor: "#bebebe",
    width: 300,
    textAlign: "center",
    borderWidth: 2,
    borderStyle: "solid",
    fontSize: 15,
    borderRadius: 25
  }
});
