import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";
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

    const url = `https://api.github.com/users/${value}/repos`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <ScrollView style={s.contentContainer}>
        <View style={s.container}>
          <View>
            <Text style={s.title}>Get your GitHub repos </Text>
          </View>
          <View>
            <TextInput
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
          <Text style={s.countText}>
            {this.state.repos.length + "  repos"}{" "}
          </Text>
          {this.state.repos.map(repo => {
            return <Text>{repo.name} </Text>;
          })}
          <Text style={s.footer}> Awet Fessha @2018</Text>
        </View>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
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
  title: {
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 20
  },

  countText: {
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 20
  },
  footer: {
    paddingBottom: 20,
    paddingTop: 20,
    fontSize: 15,
    fontStyle: "italic"
  }
});
