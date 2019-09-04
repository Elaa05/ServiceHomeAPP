import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import { SearchBar } from 'react-native-elements';

class Services extends Component {
    static navigationOptions = {
        headerTitle: 'Services ? ',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };




    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ width: width(80), alignItems: 'center', justifyContent: 'center' ,marginTop: 20}}>
                                    <Text style={{ fontFamily: 'AvenirNext-Bold', fontSize: 26, fontStyle: 'italic', color: 'white' }} > ── Our Services── </Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                <SearchBar
                                    placeholder="Type Here..."
                                    onChangeText={this.updateSearch}
                                    value={search}
                                  
                                />
                                </View>
                      
                            <View style={{ flex: 1, width: width(95), alignItems: 'center', backgroundColor: 'transparent' }}>
                         
                                <View style={{ width: width(90), height: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: height(5) }}>
                                    <TouchableOpacity style={{ width: 150, height: 300, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Problemedescription')}  >

                                        <Image source={require('./images/clima.png')} style={{ width: 80, height: 70 }} />
                                        <Text style={{ fontSize: 14, color: 'orange' }}>A/C</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1, marginTop: height(5) }}></View>
                                    <TouchableOpacity style={{ width: 150, height: 300, justifyContent: 'center', alignItems: 'center' }}>

                                        <Image source={require('./images/netto.png')} style={{ width: 80, height: 70 }} />
                                        <Text style={{ fontSize: 14, color: 'orange', alignItems: 'center' }}>Cleaning</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 2, }}></View>
                                <View style={{ width: width(90), height: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: height(3) }}>
                                    <TouchableOpacity style={{ width: 150, height: 220, justifyContent: 'center', alignItems: 'center' }}>

                                        <Image source={require('./images/paint.png')} style={{ width: 80, height: 70 }} />
                                        <Text style={{ fontSize: 14, color: 'orange' }}>Painting </Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}></View>
                                    <TouchableOpacity style={{ width: 150, height: 220, justifyContent: 'center', alignItems: 'center' }}>

                                        <Image source={require('./images/n.png')} style={{ width: 70, height: 60 }} />
                                        <Text style={{ fontSize: 14, color: 'orange', alignItems: 'center' }}>Electricity</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3 }}></View>
                                <View style={{ width: width(90), height: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: height(3) }}>
                                    <TouchableOpacity style={{ width: 150, height: 220, justifyContent: 'center', alignItems: 'center' }}>

                                        <Image source={require('./images/menuis.png')} style={{ width: 70, height: 60 }} />
                                        <Text style={{ fontSize: 14, color: 'orange' }}>Carpentry</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}></View>
                                    <TouchableOpacity style={{ width: 150, height: 220, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('./images/plumbing.png')} style={{ width: 70, height: 60 }} />
                                        <Text style={{ fontSize: 14, color: 'orange', alignItems: 'center' }}>Plumbing</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </ScrollView>

                    </View>
                </ImageBackground>
            </View >

        )
    }

}
export default Services;


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
        marginVertical: height(8),
        elevation: 5

    },


});
