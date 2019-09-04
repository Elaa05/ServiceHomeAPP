import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension'
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';


class Problemedescription extends Component {
    static navigationOptions = {
        headerTitle: 'Problem Description ',
        headerStyle: {
            backgroundColor: 'gray'
        }
    }
    constructor() {
        super();
        this.state = {
            avatarSource: null,
            image: null,
            Images: [],
            simpleImages: []
        }
    }
    //

    //    
    //     , Images:this.state.Images };
    //     var updates = {};
    //     updates['/rendezvousID/' ] = updateData;
    
    //     firebase.database().ref('RDV/').update(updates).then((data)=> {
    //         this.props.navigation.navigate('ProblemLocation')
    //         console.log('data ', data)
    //     }).catch((error) => {
    //         console.log('error ', error)
    //     })
    // }
    updatedescription() {
    var RDVRef = firebase.database().ref('RDV');

    var RDVData = {
    problemetitle: this.state.problemetitle,
problemedescription:this.state.problemedescription
    };

   RDVRef.push(RDVData);
    var RDVKey = RDVRef.key;

    var query = firebase.database().ref('accounts').orderByChild('email').equalTo('gab@gmail.com');
    query.once('value', data => {
        data.forEach(userSnapshot => {
            let userKey = userSnapshot.key;

            firebase.database().ref('RDV').child(RDVKey).child('accounts').update({
                [userKey]: true,
            }), this.props.navigation.navigate('Navigationcustomer'), (error) => {
                if (error) {
                    console.log(error.message);
                } else {
                    
                }
            }
        });
    },this.props.navigation.navigate('ProblemLocation'));
}

    
    imagePicker = async () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, async (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                var avatarSource = { uri: response.uri, type: response.type, name: response.fileName }
                var image = { uri: response.uri, width: response.width, height: response.height }
                if (this.state.Images.length < 3) {
                    // Filling our arrays by images
                    this.state.Images.push(image);
                    this.state.simpleImages.push(avatarSource);
                }
                await this.setState({
                    avatarSource: { uri: response.uri, type: response.type, name: response.fileName },
                    image: { uri: response.uri, width: response.width, height: response.height }
                });
            }
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ problemetitle: value })}
                                    placeholder='Probleme Title '
                                    placeholderTextColor='grey'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />
                            </View>
                            <View style={styles.schoolInputContainer}>
                                <Text style={{ color: 'orange', justifyContent: 'center', alignItems: 'center', textShadowRadius: 200, textAlignVertical: 'center' }}> Explain your Probleme  </Text>
                            </View>
                            <View  style={styles.schoolInputContainer}>

                                <TextInput 
                                //  style={styles.TextInputStyleClass}
                                  style={styles.TxtInputSchooldes}
                                 onChangeText={(value) => this.setState({ problemedescription: value })}
                                  
                                    placeholder='Add Description  '
                                    placeholderTextColor={"#9E9E9E"}
                                    numberOfLines={10}
                                    multiline={true}
                                />
                            </View>
                            <View style={{marginTop:50 ,justifyContent:'center',alignItems:'center' ,  flex: 1,flexDirection: 'row'}}>
                                <TouchableOpacity  style={{ flexDirection:'row',flex:1,alignItems:'center'}} onPress={() => this.imagePicker()}>
                                    {/* <Image source={require('./images/addphoto.png')} style={{ width: 50, height: 50,justifyContent: 'space-between' }}></Image> */}
                                    <Image source={require('./images/addphoto.png')} style={{ width: 50, height: 50  , marginLeft: 140}}></Image>
                                </TouchableOpacity>
                                <View>
        
                                <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center'}} onPress={() => this.imagePicker()}>
                                    <Image source={require('./images/micro.png')} style={{ width: 50, height: 50  ,marginRight:140 }}></Image>
                                </TouchableOpacity>
                                </View>
                                </View>
                                <View style={{flexDirection:'row', marginTop:20}}>
                                    {
                                        this.state.Images.map((item, key) => {
                                            return (
                                                <Image key={key} source={item} style={{ height: 50, width: 90 }} />
                                            )
                                        })
                                    }

                                </View>
                         

                            <View style={{ flexDirection:'row', height:height(10) , width:width(100),marginTop:100}}>
                              

                                <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center'}}  onPress={() => this.props.navigation.navigate('Navigationcustomer')}>
                                    <Image source={require('./images/back.png')} style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'flex-end' }}></Image>
                                    <Text style={{ color: 'white' }} > B A C K </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection:'row',flex:1,alignItems:'center',justifyContent:'flex-end', justifyContent: 'space-between'}}  onPress={() => this.updatedescription()  }>
                                    <Text style={{ color: 'white' }} >N E X T </Text>
                                <Image source={require('./images/next.png')} style={{ width: 30, height: 30, flexDirection: 'row', alignItems: 'flex-end' }}></Image>
                                  
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

export default Problemedescription;
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
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        //alignItems: 'center',

        //justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: totalSize(1.9),
        //color: 'rgb(217,217,217)'
        color: 'black',
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
        width: width(100),
        height: height(10),
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgb(180,210,53)',
        //backgroundColor: 'rgb(0,173,238)',
        //backgroundColor: 'white',
        //marginBottom: height(1),
        //elevation: 10
        marginVertical: height(2),
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
        elevation: 3

    }, TextInputStyleClass: {
        // textAlign: 'center',
        // height: 50,
        // borderWidth: 2,
        // // borderColor: '#9E9E9E',
        // borderRadius: 20,
        // backgroundColor: "#FFFFFF",
        // height: 150
    },
    TxtInputSchooldes: {
        width: width(75),
        // height: height(6),
        borderWidth: 2,
        borderColor: '#9E9E9E',
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        //alignItems: 'center',

        //justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: totalSize(1.9),
        //color: 'rgb(217,217,217)'
        color: 'black',
        //marginVertical:height(2),
        //borderRadius: 25,
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
