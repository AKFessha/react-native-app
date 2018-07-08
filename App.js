import React from "react";
import { StyleSheet, Text, View, Image, Alert, Dimensions } from "react-native";
import { Button } from "react-native";
import { blue } from "ansi-colors";
import { Directions, TextInput } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    searchValue: "",
    repos: []
  };

  handleSearch = () => {
    const value = this.state.searchValue;
    // Alert.alert({ value });
    const url = `https://api.github.com/users/${value}/repos`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.warn(url);
        this.setState({
          repos: data
        });
      });
  };

  render() {
    return (
      // <View style={styles.container}>
      //   <Text> I</Text>
      //   <Image source={require("./assets/heart.jpg")} style={styles.img} />
      //   <Text> CodeYourFuture</Text>
      //   <Button
      //     onPress={this.alert}
      //     title="Enter"
      //     color="#841584"
      //     accessibilityLabel="Enter"
      //   />
      // </View>
      <View style={s.container}>
        {/* <View style={[s.box, s.box1]}>
          <Text style={s.text}> 1 </Text>
        </View>
        <View style={[s.box, s.box2]}>
          <Text style={s.text}> 2 </Text>
        </View>
        <View style={[s.box, s.box3]}>
          <Text style={s.text}> 3 </Text>
        </View>  */}
        <View>
          <Text>Header </Text>
        </View>
        <View>
          <TextInput
            title="Enter Github Username"
            onChangeText={text =>
              this.setState({
                searchValue: text
              })
            }
            style={s.textBox}
          />
        </View>
        <View>
          <Button onPress={this.handleSearch} title="Search" />
        </View>
        {this.state.repos.map(repo => {
          <Text>{repo.name} </Text>;
        })}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   img: {
//     width: 200,
//     height: 200
//   }
// });
const s = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  textBox: {
    height: 40,
    width: width - 20,
    borderColor: "gray",
    borderWidth: 1
  },
  box: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  text: {
    fontSize: 40,
    color: "white"
  },
  box1: {
    backgroundColor: "blue"
  },
  box2: {
    backgroundColor: "green"
  },
  box: {
    backgroundColor: "red"
  }
});
