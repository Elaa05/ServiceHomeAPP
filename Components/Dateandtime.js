import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import { WheelPicker, TimePicker, DatePicker } from 'react-native-wheel-picker-android'
import firebase from 'react-native-firebase';

const wheelPickerData = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
class Dateandtime extends Component {
    static navigationOptions = {
        headerTitle: 'Date and Time ',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }

    state = {
        selectedItem: 0,
    }

    onItemSelected = selectedItem => {
        this.setState({ selectedItem })
    }
    onTimeSelected = date => { }

    updatetimeanddate() {

        // var updateData = {selectedItem:this.state.selectedItem

        // };
        // var updates = {};
        // updates['/rendezvousID/' + userID ] = updateData;

        // firebase.database().ref('RDV/').push(updates).then((data)=> {
        //     //success callback
        //      this.props.navigation.navigate('TabNavigator')
        //     console.log('data ', data)
        // }).catch((error) => {
        //     //error callback
        //     console.log('error ', error)
        // })
        var RDVRef = firebase.database().ref('RDV');

        var RDVData = {
            jour:'Sunday',
            heure:'02:40 AM '
        };

       RDVRef.push(RDVData);
        var RDVKey = RDVRef.key;

        var query = firebase.database().ref('accounts').orderByChild('email').equalTo('gab@gmail.com');
        query.once('value', data => {
            data.forEach(userSnapshot => {
                let userKey = userSnapshot.key;

                firebase.database().ref('RDV').child(RDVKey).child('accounts').update({
                    [userKey]: true,
                }), (error) => {
                    if (error) {
                        console.log(error.message);
                    } else {
                      
                    }
                }
            });
        }),  this.props.navigation.navigate('Customers');
    }




    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:50 }} >
                                <Text style={{ color: '#e65100', justifyContent: 'center', alignItems: 'center', fontSize: 24 }}> When you need this service ?  </Text>
                            </View>
                          

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <WheelPicker
                                    date={this.state.date}
                                    selectedItem={this.state.selectedItem}
                                    data={wheelPickerData}
                                    onItemSelected={this.onItemSelected}
                                    selectedValue={this.state.selectedItem}
                                // onDateChange={(date) => {this.setState({date: date})}} 
                                />

                            </View>
                            <View>
                            <TimePicker onTimeSelected={this.onTimeSelected} />
                            </View>
                            <View style={{ flexDirection:'row', height:height(8) , width:width(100),marginTop:150}}>
                              

                              <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center'}}  onPress={() => this.props.navigation.navigate('ProblemLocation')}>
                                  <Image source={require('./images/back.png')} style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'flex-end' }}></Image>
                                  <Text style={{ color: 'white' }} > B A C K </Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center',justifyContent:'flex-end'}}  onPress={() =>this.updatetimeanddate() }>
                                  <Text style={{ color: 'white' }} >N E X T </Text>
                              <Image source={require('./images/next.png')} style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'flex-end' }}></Image>
                                
                              </TouchableOpacity>
                          </View>
                            {/* <View>
                            <TouchableOpacity Style={{ flexDirection:'row',flex:1,alignItems:'center' }}onPress={() => this.updatetimeanddate()}>
                                    <Text style={{ color: 'white',justifyContent:'flex-end' }}>Next </Text>
                                    <Image source={require('./images/next.png')} style={{ width: 50, height: 50, flexDirection: 'row',flex:1,justifyContent:'flex-end' }}></Image>
                                </TouchableOpacity>
                          
                               </View> */}
                        </ScrollView>
                    </View>
              
                </ImageBackground>
            </View>
        );
    }

}

export default Dateandtime;
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
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
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
        flex: 3,
        flexDirection: 'column'
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
        marginVertical: height(1),
        elevation: 3

    }, TextInputStyleClass: {
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        height: 150
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }


});
