
import React from 'react';
import AppNavigator from './src/Components/navigator/AppNavigator';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends React.Component {


  componentDidMount() {
    let config = {
      apiKey: "AIzaSyD9B38HGWWeIA-Z0TNIUTmx3zWA6_KCvn4",
    authDomain: "homeservice-b85e5.firebaseapp.com",
    databaseURL: "https://homeservice-b85e5.firebaseio.com",
    projectId: "homeservice-b85e5",
    storageBucket: "homeservice-b85e5.appspot.com",
    messagingSenderId: "698570810040",
    appId: "1:698570810040:web:4bb5e2ac068d1243"
    };
    firebase.initializeApp(config);
}
  render() {
    return (
        <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});