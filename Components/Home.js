import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: false,
      email: 'ellaa@gmail.com',
      password: '123',
      loading: false,
    };
  }
  static navigationOptions = {
    header: null
  }
  render() {
    return (
  
      <View style={styles.container}>

        <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>

          <View style={styles.lowerContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1, width: width(95), alignItems: 'center', marginTop: height(5) }}>
                <View style={{ width: width(100), alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('./images/logooo.png')} style={{ height: 100, width: 200 }} />
                </View>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text> Welcome to My app  </Text>
                  <Text style={{
                    marginVertical: height(8), justifyContent: 'center',
                    alignItems: 'center' ,color:'white' }}>  An app which allows you to find and call a handyman in minutes.
                         In Tunisia, Let's suppose that you got lucky and found a number,
                        most of the time the handyman will be Fastwork solve each problem of those so users can submit demands in a few clicks,
                        they can also schedule them. Moreover, they can give feedback about the handyman service and see others review.</Text>
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={[styles.button, { backgroundColor: '#373737',marginTop:50}]} onPress={() => this.props.navigation.navigate('Navigationsignup')}>

                    <View style={styles.btnTxtContainer}>
                      {
                        this.state.loading === true ?
                          <ActivityIndicator size={'small'} color='white' />
                          :
                          <Text style={styles.btnTxt}> Sign UP  </Text>

                      }
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={[styles.button, { backgroundColor: '#373737' }]}onPress={() => this.props.navigation.navigate('Login') }>

                    <View style={styles.btnTxtContainer}>
                      {
                        this.state.loading === true ?
                          <ActivityIndicator size={'small'} color='white' />
                          :
                          <Text style={styles.btnTxt}> Login   </Text>

                      }
                    </View>


                  </TouchableOpacity>
                </View>
              </View>

            </ScrollView>
          </View>

        </ImageBackground>

      </View>





    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  TxtInputSchool: {
    width: width(75),
    height: height(6),
    //alignItems: 'center',

    //justifyContent: 'center',
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
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
    // backgroundColor: 'rgb(0,173,238)'
    //backgroundColor:'rgb(180,210,53)'
    //marginTop: height(10)
  },
  txtContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //marginVertical: height(3)
    marginVertical: height(2),
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
    justifyContent: 'center'
  },
  btnTxt: {
    fontSize: totalSize(2.5),
    color: 'white',

  },
  // triangle: {
  //   width: 0,
  //   height: 0,
  //   backgroundColor: 'transparent',
  //   borderStyle: 'solid',
  //   borderLeftWidth: 50,
  //   borderRightWidth: 50,
  //   borderBottomWidth: 100,
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  //   borderBottomColor: 'red',
  //   position: 'absolute'
  // },
  // triangleDown: {
  //   width: width(3),
  //   height: height(6),
  //   backgroundColor: 'transparent',
  //   borderStyle: 'solid',
  //   borderLeftWidth: 8,
  //   borderRightWidth: 4,
  //   borderBottomWidth: 15,
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  //   borderBottomColor: 'rgb(180,210,53)',
  //   transform: [
  //     { rotate: '180deg' }
  //   ],
  //   bottom: height(0.1)
  // },
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
    //backgroundColor: 'rgb(180,210,53)',
    //backgroundColor: 'rgb(0,173,238)',
    //backgroundColor: 'white',
    //marginBottom: height(1),
    //elevation: 10
    marginVertical: height(3),
    // borderWidth: 0.25,
    //borderColor: 'rgb(180,210,53)'
    // borderColor: 'rgb(66,67,69)'

  },
  button: {
    width: width(80),
    height: height(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f47e17',
    //backgroundColor: 'rgb(0,173,238)',
    //backgroundColor: 'black',
    marginVertical: height(1),
    elevation: 2,
    borderRadius: 25,



  },


});
