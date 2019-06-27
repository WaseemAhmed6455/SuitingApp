import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Bottom from "./Bottom";
import { Right, Left } from "native-base";
import Product from "./Products";
import Sales from "./Sale";
import BuyNows from "./BuyNow";
import Slideshow from "react-native-image-slider-show";

var f = require("../img/1.jpg");
var s = require("../img/2.jpg");
var l = require("../img/3.jpg");
var t = require("../img/4.jpg");
var h = require("../img/10.jpg");
var g = require("../img/8.jpg");
var y = require("../img/5.jpg");

export default class Home extends Component {
  Products() {
    {
      this.props.navigation.navigate("Products");
    }
  }
  Sale() {
    {
      this.props.navigation.navigate("Sale");
    }
  }
  BuyNow() {
    {
      this.props.navigation.navigate("BuyNow");
    }
  }
  constructor(props) {
    super(props);
    // this.state = { Products: true, Sale: false, BuyNow: false };
    this.state = {
      Products: true,
      Sale: false,
      BuyNow: false,
      position: 1,
      interval: null,
      dataSource: [
        {
          title: "Mens Wear",
          caption: "Suit 1",
          url: f
        },
        {
          title: "Mens Wear",
          caption: "Suit 2",
          url: s
        },
        {
          title: "Mens Wear",
          caption: "Suit 3",
          url: l
        },
        {
          title: "Mens Wear",
          caption: "Suit 4",
          url: t
        },
        {
          title: "Mens Wear",
          caption: "Suit 5",
          url: h
        },
        {
          title: "Mens Wear",
          caption: "Suit 6",
          url: g
        },
        {
          title: "Mens Wear",
          caption: "Suit 7",
          url: y
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  renderView = () => {
    const { Products, Sale, BuyNow } = this.state;
    console.log("Reender View Products");
    if (Products) {
      console.log("Products");
      return <Product />;
    } else if (Sale) {
      console.log("Sale");
      return <Sales />;
    } else if (BuyNow) {
      console.log("Buy");
      return <BuyNows />;
    }
  };

  render() {
    const { navigate } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <Slideshow
            dataSource={this.state.dataSource}
            titleStyle={{ color: "white" }}
            captionStyle={{ color: "white" }}
            height={200}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            //style={{ height: 200 }}
          />
          <View style={{ backgroundColor: "white" }}>
            <Text
              style={{
                margin: 10,
                fontWeight: "bold",
                fontSize: 20,
                alignSelf: "center",
                color: "black"
              }}
            >
              Categories
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  width: 250,
                  height: 170,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ProductList")}
                >
                  <Image
                    source={require("../img/5.jpg")}
                    style={{
                      width: 250,
                      //margin: 1,
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
                  width: 250,
                  height: 170,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ProductList")}
                >
                  <Image
                    source={require("../img/9.jpg")}
                    style={{
                      width: 240,
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
                  width: 250,
                  height: 170,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
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
                  width: 250,
                  height: 170,
                  elevation: 3,
                  borderRadius: 10,
                  marginRight: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ProductList")}
                >
                  <Image
                    source={require("../img/10.jpg")}
                    style={{
                      width: "99%",
                      margin: 1,
                      height: 100,
                      marginRight: 10,
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
            </ScrollView>
            <View style={{ margin: 15 }}>
              <Text
                style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
              >
                Product
              </Text>
              <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                Here You Can Buy The Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 100, flex: 1 }}
            >
              <View
                style={{
                  width: 250,
                  height: 175,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetail")
                  }
                >
                  <Image
                    source={require("../img/5.jpg")}
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
                    Product Name
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    Description about the product
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Left>
                      <Text />
                    </Left>
                    <Right style={{ right: 0, bottom: 15, marginTop: 5 }}>
                      <Image
                        source={require("../img/Faviourate.png")}
                        style={{
                          width: 30,
                          height: 30
                        }}
                      />
                    </Right>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 250,
                  height: 175,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetail")
                  }
                >
                  <Image
                    source={require("../img/6.jpg")}
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
                    Product Name
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    Description about the product
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Left>
                      <Text />
                    </Left>
                    <Right style={{ right: 0, bottom: 15, marginTop: 5 }}>
                      <Image
                        source={require("../img/Faviourate.png")}
                        style={{
                          width: 30,
                          height: 30
                        }}
                      />
                    </Right>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 250,
                  height: 175,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetail")
                  }
                >
                  <Image
                    source={require("../img/7.jpg")}
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
                    Product Name
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    Description about the product
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Left>
                      <Text />
                    </Left>
                    <Right style={{ right: 0, bottom: 15, marginTop: 5 }}>
                      <Image
                        source={require("../img/Faviourate.png")}
                        style={{
                          width: 30,
                          height: 30
                        }}
                      />
                    </Right>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 250,
                  height: 175,
                  elevation: 3,
                  borderRadius: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 10
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("ProductDetail")
                  }
                >
                  <Image
                    source={require("../img/7.jpg")}
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
                    Product Name
                  </Text>
                  <Text style={{ fontSize: 12, color: "#9B9B9B" }}>
                    Description about the product
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Left>
                      <Text />
                    </Left>
                    <Right style={{ right: 0, bottom: 15, marginTop: 5 }}>
                      <Image
                        source={require("../img/Faviourate.png")}
                        style={{
                          width: 30,
                          height: 30
                        }}
                      />
                    </Right>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <Bottom navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
