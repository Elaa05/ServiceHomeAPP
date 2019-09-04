import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, ScrollView, ToastAndroid,Image, ImageBackground } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
var { FBLoginManager } = require('react-native-facebook-login');
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firebase from 'react-native-firebase'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOption: false,
            email: '',
            password: '',
            loading: false,
        };
    }
    handleLogin = () => {
        // TODO: Firebase stuff...
        console.log('handleLogin')
      }

    static navigationOptions = {
        header: null
    }
    //.... FaceBook Login Methodes
    fbLogin = () => {
        FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Native); // defaults to Native
        FBLoginManager.loginWithPermissions(["email"], functionFb = async (error, data) => {
            if (!error && data.type === "success") {
                //Calling local func for login through google
                let profile = JSON.parse(data.profile);
                // store.LOGIN_TYPE = 'facebook';
                // this.socialLogin(profile.email, profile.name);
                console.warn("FaceBook signUp: ", data);
            } else {
                // Toast.show('It must be your network issue, please try again.', Toast.LONG);
                console.log("Error: ", error);
            }
        })
    }
    loginuser = async() => {
        this.setState({ loading: true })
        await firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) =>{
                 this.setState({ loading: false })
                 console.log("logged in!")
 
                //  console.warn(response.user.email)
                    this.props.navigation.navigate('Navigationcustomer');
                
              
              
            
            })
            .catch(error =>{
                // console.warn('error=',error);
                // this.setState({ loading: false })
                console.log(error.toString(error));
            })

    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, width: width(95), alignItems: 'center', backgroundColor: 'transparent', marginTop: height(5) }}>
                                <View style={{ height: height(15), width: width(80), alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('./images/logooo.png')} style={{ height: 100, width: 200 }} />
                                </View>
                                <View style={[styles.txtContainer, {}]}>
                                    <Text style={[styles.welcome, { fontSize: totalSize(4) }]}>Login</Text>
                                </View>
                                <View style={[styles.txtContainer, { flexDirection: 'row' }]}>
                                    <Text style={[styles.welcome, { fontSize: totalSize(1.5), fontWeight: 'normal' }]}>DON'T HAVE AN ACCOUNT? </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Navigationsignup')}>
                                        <Text style={[styles.welcome, { fontSize: totalSize(1.5), color:'#d84315', fontWeight: 'normal' }]}>SIGN UP!</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.schoolInputContainer}>
                               
                                    <TextInput
                                    
                                        onChangeText={(value) => this.setState({email: value })}
                                        placeholder='EMAIL'
                                        placeholderTextColor='black'
                                        underlineColorAndroid='transparent'
                                        style={styles.TxtInputSchool}
                                    />
                                     
                                </View>
                                <View style={styles.schoolInputContainer}>
                               
                                    <TextInput
                                        onChangeText={(value) => this.setState({password: value })}
                                        placeholder='PASSWORD'
                                        placeholderTextColor='black'
                                        underlineColorAndroid='transparent'
                                        secureTextEntry={true}
                                        style={styles.TxtInputSchool}
                                       
                                    />
                                   
                                
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpass')}>
                                        <Text style={[styles.welcome, { fontSize: totalSize(1.2), fontWeight: 'normal', color: 'red' }]}>FORGOT PASSWORD ? </Text>

                                    </TouchableOpacity>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={styles.button} onPress={() =>this.loginuser()}>
                                        <View style={styles.btnTxtContainer}>
                                            {
                                                this.state.loading === true ?
                                                    <ActivityIndicator size={'small'} color='white' animating={true} />
                                                    :
                                                    <Text style={styles.btnTxt}>Login </Text>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ width: width(80), alignItems: 'center', justifyContent: 'center' ,marginTop: 10}}>
                                    <Text style={{  fontSize: 18, fontStyle: 'italic', color: 'white' }} > ──────  OR ──────  </Text>
                                </View>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={[styles.button, { backgroundColor: '#1a237e' }]} onPress={() => { this.fbLogin() }}>

                                        <View style={styles.btnTxtContainer}>
                                            {
                                                this.state.loading === true ?
                                                    <ActivityIndicator size={'small'} color='white' />
                                                    :
                                                    <Text style={styles.btnTxt}>Sign up via facebook  <Image source={require('./images/facebook.png')} style={{ width: 15, height: 15 }} ></Image></Text>

                                            }
                                        </View>


                                    </TouchableOpacity>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity style={[styles.button, { backgroundColor: '#373737' }]} onPress={() => this.props.navigation.navigate('Personmenu')}>

                                        <View style={styles.btnTxtContainer}>
                                            {
                                                this.state.loading === true ?
                                                    <ActivityIndicator size={'small'} color='red' />
                                                    :
                                                    <Text style={styles.btnTxt}> Sign up via Google  <Image source={require('./images/google.png')} style={{ width: 10, height: 10 }} ></Image></Text>

                                            }
                                        </View>


                                    </TouchableOpacity>
                                </View>
                                {/*
                                <View style={{ width: width(80), height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                                        <Text style={{ fontSize: 14, color: 'white' }}>Google</Text>
                                        <Image source={require('./images/google.png')} style={{ width: 10, height: 10 }} />
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}></View>
                                    <TouchableOpacity style={{ width: 100, height: 40, backgroundColor: '#1a237e', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 14, color: 'white' }}>Facebook</Text>
                                        <Image source={require('./images/facebook.png')} style={{ width: 15, height: 15 }} />
                                    </TouchableOpacity>
                               </View> */}
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Login;


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
        backgroundColor: 'white',
        fontSize: totalSize(1.5),
        //color: 'rgb(217,217,217)'
        color: 'black',
        //marginVertical:height(2),
        borderRadius: 25,
    },
    lowerContainer: {
        flex: 1,
        // width: width(100),
        //height: null,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
      
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
        justifyContent: 'center',
        borderRadius: 25,
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
        borderRadius: 25,
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
        elevation: 3, borderRadius: 25,

    },


});
