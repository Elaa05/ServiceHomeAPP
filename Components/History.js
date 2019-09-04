import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'


class History extends Component {
    static navigationOptions = {
        headerTitle: 'Work done ',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.schoolInputContainer}>

                                <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', fontSize: 24, color: 'green' }}> W O R K  D O N E  </Text>
                            </View>

                            <View style={{ height: height(18), width: width(90), marginTop: 10, backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, marginTop: 20 }}>

                                <View style={{ height: height(7), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>

                                    <Text style={{ fontSize: 18, color: 'black' }}>Request 1 :</Text>
                                    <Text style={{ fontSize: 18, color: 'gray' }}> Lavage </Text>

                                </View>
                                <View style={{ height: height(7), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>

                                    <Text style={{ fontSize: 18, color: 'black' }}> Work :</Text>
                                    <Text style={{ fontSize: 18, color: 'gray' }}>Gabes, cité amel 4, Sunday at 10 pm  </Text>
                                </View>

                            </View>
                            <View style={{ height: height(18), width: width(90), marginTop: 10, backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, marginTop: 20 }}>

                                <View style={{ height: height(7), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>

                                    <Text style={{ fontSize: 18, color: 'black' }}>Request 4 :</Text>
                                    <Text style={{ fontSize: 18, color: 'gray' }}> Lavage  </Text>

                                </View>
                                <View style={{ height: height(7), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>

                                    <Text style={{ fontSize: 18, color: 'black' }}> Work :</Text>
                                    <Text style={{ fontSize: 18, color: 'gray' }}>Gabes, bab bhar ,wednesday at 16 pm  </Text>
                                </View>

                            </View>


                            <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', textAlignVertical: 'center', fontSize: 24, marginTop: 15, color: 'red' }}> W O R K  N O T  E X E C T U T E D  </Text>


                            <View style={{ height: height(5), width: width(90), marginTop: 10, backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, marginTop: 20 }}>

                                <View style={{ height: height(3), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Request 2</Text>
                                </View>
                            </View>
                            <View style={{ height: height(5), width: width(90), marginTop: 10, backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, marginTop: 20 }}>

                                <View style={{ height: height(3), alignItems: 'center', alignSelf: 'center', flexDirection: 'row', width: width(85) }}>
                                    <Text style={{ fontSize: 18, color: 'black' }}>Request 3 </Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
export default History;


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

