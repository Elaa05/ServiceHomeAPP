import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, PermissionsAndroid, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import firebase from 'react-native-firebase';
class ProblemLocation extends Component {
    constructor() {
        super();
        this.state = {
            latitude: '',
            longitude: ''
        }
    }
    static navigationOptions = {
        headerTitle: 'Problem Location ',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }
    updatelocation() {

        var RDVRef = firebase.database().ref('RDV');

        var RDVData = {
         
            latitude: this.state.latitude ,
            longitude: this.state.longitude
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
    },this.props.navigation.navigate('Dateandtime'));
}
    
    async componentDidMount() {  
        console.warn('yes');
             
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  navigator.geolocation.getCurrentPosition(
                    func = async(position) => {
                     console.warn('getCurrentPosition=',position);
                  },
                  (error) => this.setState({ error: error.message }),
                  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
            //   Geolocation.getCurrentPosition(func = async (position) => {
            //     // console.log('getCurrentPosition=',position);
            //     await this.getAddress(position.coords.latitude, position.coords.longitude);
            //     await this.setState({
            //       latitude: position.coords.latitude,
            //       longitude: position.coords.longitude,
            //     });
            //     this.setState({ currentLoc: false })
            //   },
            //     (error) => this.setState({ error: error.message }),
            //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
            }
            else {
             // this.setState({ currentLoc: false })
            }
          }
          catch (err) {
            console.warn(err)
          }
        
    }
    render() {
        let regins = {
            latitude: this.state.latitude || 36.8189700	,
            longitude: this.state.longitude || 10.1657900,
            latitudeDelta: 0.942,
            longitudeDelta: 0.942,
        }
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ height: 500, width: 500 }}>
                                <MapView
                                    zoomEnabled={true}
                                    zoomControlEnabled={true}
                                    toolbarEnabled={true}
                                    showsCompass={true}
                                    showsBuildings={true}
                                    showsIndoors={true}
                                    provider={PROVIDER_GOOGLE}
                                    showsMyLocationButton={true}
                                    showsUserLocation={true}
                                    followsUserLocation={true}
                                    minZoomLevel={2}
                                    maxZoomLevel={20}
                                    // mapType = {"standard"}
                                    loadingEnabled={true}
                                    loadingIndicatorColor={'green'}
                                    loadingBackgroundColor={'white'}
                                    // moveOnMarkerPress={true}
                                    style={{
                                        height: 500,
                                        width: 500,
                                        zIndex: -10,
                                        position: 'absolute',
                                        borderRadius:0.25,
                                        justifyContent:'center',
                                        flex:1,
                                        marginTop:20,
                                        flexDirection:'row', alignItems:'center'
                                    }}
                                    region={regins}
                                // onRegionChange={this.onRegionChange.bind(this)}
                                >
                                </MapView>
                            </View>

                            <View style={{ flexDirection:'row', height:height(10) , width:width(100) , marginTop:20}}>
                            <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center',justifyContent:'flex-end'}} onPress={() => this.updatelocation()}>
                    
                                            <Text style={{color: 'white', fontSize:20}}>Next </Text>
                                            <Image source={require('./images/next.png')} style={{ width:50, height:50, flexDirection: 'row', alignItems: 'flex-end' }}></Image>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default ProblemLocation;
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
