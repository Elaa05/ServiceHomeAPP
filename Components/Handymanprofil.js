import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Handymanprofil extends Component {
    static navigationOptions = {
        headerTitle: 'My profil ',
        headerStyle: {
            backgroundColor: 'gray'
        }}
        constructor() {
            super();
            this.state = {
                list: [{ value: 'Request 1 ' }, { value: 'Request 2 ' }, { value: 'Request 3' }, { value: 'Request 4' },
                 { value: ' Request 5' }, { value: ' Request 6' }]
            },
                {
                    starCount: 1
                };
        }
    

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                            <View style={{ width: width(100), alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={require('./images/customer.png')} style={{  marginTop: 10,height: 100, width: 110 }} />
                  <Text style={{ marginVertical:10,  color:'white', fontSize:18 , justifyContent:'center', flex:1 }}> Name : Mohamed Hedi - Plombier </Text>
                </View>
                                {/* <View style={{ height: height(20), marginTop: 10,width: width(100),alignItems:'center' }}>
                                     
                                    <Image source={require('./images/serv.png')} style={{ height: height(10), width: width(100) ,alignContent:"center"}} />                                
                                    </View> */}
                                    <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', fontSize: 24, marginVertical:10 }}> A L L  R E Q U E S T </Text>
                                    <View>
                                        {
                                             this.state.list.map((item, key) => {
                                                return (
                                    <TouchableOpacity key={key} style={{ height: height(8), width: width(90), alignItems: 'center', flexDirection: 'row', backgroundColor: '#fafafa', borderRadius: 5, marginVertical: 3 ,marginTop:10 }}
                                                onPress={() => this.props.navigation.navigate('Requestdetails')}>
          
                                                <Image source={require('./images/request.png')} style={{ height: 40, width: 40, resizeMode: 'contain' }} />

                                                <Text style={{ fontSize: 18, color: 'black', marginHorizontal: 15 }}>{item.value}</Text>
                                                
                                                <TouchableOpacity style={{ justifyContent:'center',flexDirection:'row',flex:1,height:height(5),alignItems:'center', width:width(5) , backgroundColor:'green' ,marginEnd:12}} >
                                                       <Text  style={{ fontSize: 15 , color: 'black'}}> Accept </Text> 
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ justifyContent:'center',flexDirection:'row',flex:1,height:height(5),alignItems:'center', width:width(5) , backgroundColor:'red',marginEnd:12 }} >
                                                       <Text  style={{ fontSize: 15 , color: 'black'}}> Except </Text> 
                                                        </TouchableOpacity>
                                                        
                                                {/* <StarRating style={{ alignItems:'flex-end' ,flexDirection:'row', flex:1 }}>
                                        disabled={false}
                                        maxStars={3}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                      </StarRating> */}
                                            </TouchableOpacity>
                                      );
                                    })
                                }
                                    </View>
                       
                               
                            </View>
                        
                        </ScrollView>
                    </View>
                </ImageBackground>
                
            </View>

          
        )
    }
}
export default Handymanprofil;


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
        backgroundColor: 'rgba(0,0,0,0.6)',
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

