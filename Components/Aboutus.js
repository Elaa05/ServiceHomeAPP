import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import call from 'react-native-phone-call';


class Aboutus extends Component {
  static navigationOptions = {
    headerTitle: 'Contact us',
    headerStyle: {
      backgroundColor: 'gray'
    }
  }
  call = () => {
    //handler to make a call
    const args = {
      number: '+216 52 39 77 58 ',
      prompt: false,
    };
    call(args).catch(console.error);
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.lowerContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ height: height(50), width: width(90), marginTop: 90, alignSelf: 'center', borderRadius: 10 }}>
                  <View style={{ height: height(7), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                    <Icon name="user" size={20} color="#ef6c00" />
                    <Text style={{ fontSize: 14, color: 'white' }}>  Company Name:</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 14, color: 'white' }}> Fast Home Fix  </Text>
                    </View>
                  </View>
                  <View style={{ height: height(7), alignItems: 'center', marginTop: 10, alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                    <Icon name="user" size={20} color="#ef6c00" />
                    <Text style={{ fontSize: 14, color: 'white' }}>  Email :</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 14, color: 'white' }}> HomeService@gmail.com  </Text>
                    </View>
                  </View>

                  <View style={{ height: height(7), alignItems: 'center', marginTop: 10, alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                    <Icon name="phone" size={30} color="#ef6c00" onPress={this.call}  />
                    <Text style={{ fontSize: 18, color: 'white' }} onPress={this.call}>  Phone:</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, color: 'white' }} onPress={this.call}> +216 52 39 77 58  </Text>
                    </View>
                  </View>
                  <View style={{ height: height(7), alignItems: 'center', marginTop: 10, alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                    <Icon name="facebook" size={30} color="#ef6c00" />
                    <Text style={{ fontSize: 18, color: 'white' }}>  Facebook:</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, color: 'white' }}> facebook.servicehome.com  </Text>
                    </View>
                  </View>
                  <View style={{ height: height(7), alignItems: 'center', marginTop: 10, alignSelf: 'center', flexDirection: 'row', width: width(85) }}>

                    <Icon name="instagram" size={30} color="#ef6c00" />
                    <Text style={{ fontSize: 18, color: 'white' }}>  Instagram:</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 18, color: 'white' }}> insta.ServiceHome.com  </Text>
                    </View>
                  </View>

                </View>


              </View>
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Navigationcustomer')}>

                  <Image source={require('./images/back.png')} style={{ marginTop: 40, width: 80, height: 80, flexDirection: 'row', alignItems: 'flex-end' }}></Image>


                </TouchableOpacity></View>

            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
export default Aboutus;


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  TxtInputSchool: {
    width: width(75),
    height: height(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efebe9',
    fontSize: totalSize(1.5),
    //color: 'rgb(217,217,217)'
    color: 'rgb(180,210,53)',
    //marginVertical:height(2),
    //borderRadius: 25,
  },
  lowerContainer: {
    flex: 1,
    // width: width(100),
    //height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    // backgroundColor: 'rgb(0,173,238)'
    //backgroundColor:'rgb(180,210,53)'
    //marginTop: height(10)
  },
  txtContainer: {

    marginVertical: height(3),
    marginVertical: height(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: totalSize(5),
    //textAlign: 'center',
    //margin: 10,
    color: 'white',
    fontWeight: 'bold',
    //opacity: 0.6
  },
  instructions: {
    fontSize: totalSize(2),
    textAlign: 'center',
    color: 'rgb(66,67,69)',
    //color: 'rgb(217,217,217)',
    //marginBottom: 5,
  },
  btnTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: totalSize(2.5),
    color: 'white',

  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    position: 'absolute'
  },
  triangleDown: {
    width: width(3),
    height: height(6),
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 4,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgb(180,210,53)',
    transform: [
      { rotate: '180deg' }
    ],
    bottom: height(0.1)
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'black'
  },
  schoolInputContainer: {
    width: width(80),
    height: height(7),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    //backgroundColor: 'rgb(180,210,53)',
    //backgroundColor: 'rgb(0,173,238)',
    //backgroundColor: 'white',
    //marginBottom: height(1),
    //elevation: 10
    marginVertical: height(1),
    borderWidth: 0.25,
    //borderColor: 'rgb(180,210,53)'
    borderColor: 'rgb(66,67,69)'

  },
  button: {
    width: width(80),
    height: height(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47e17',
    //backgroundColor: 'rgb(0,173,238)',
    //backgroundColor: 'black',
    marginVertical: height(2),
    elevation: 5

  },


});

