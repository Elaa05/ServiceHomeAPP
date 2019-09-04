import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import firebase from 'react-native-firebase';

// import StarRating from 'react-native-star-rating';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



class Confirmation extends Component {
    static navigationOptions = {
        headerTitle: '',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }
    constructor() {
        super();
        this.state = {

            loading: false
        }

    }
    //    onStarRatingPress(rating) {
    //     this.setState({
    //       starCount: rating
    //     });
    //   }
    async componentWillMount() {
        await this.readUserData()
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    {
                        this.state.loading ?
                            <ActivityIndicator color='orange' animating={true} size='large' />
                            :
                            <View style={styles.lowerContainer}>
                                <ScrollView showsVerticalScrollIndicator={false}>


                                    <View style={{ width: width(100), alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={require('./images/logooo.png')} style={{ height: 100, width: 200 }} />
                                        <Image source={require('./images/done.png')} style={{ height: 300, width: 300 ,marginTop:20 }} />
                                    </View>



                                </ScrollView>
                            </View>
                    }
                </ImageBackground>
            </View>
        )
    }
}
export default Confirmation;


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

