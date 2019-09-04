import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, ActivityIndicator, ScrollView, Image, ImageBackground } from 'react-native';
// import ListViewSelect from 'react-native-list-view-select';
import { height, width, totalSize } from 'react-native-dimension'
import DateTimePicker from "react-native-modal-datetime-picker";
import firebase from 'react-native-firebase';
import TimePicker from 'react-native-simple-time-picker';
import _ from 'lodash';
class Formhandyman extends Component {

    static navigationOptions = {
        headerTitle: 'Sign UP for Handy man ', headerStyle: {
            backgroundColor: 'gray'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: true,
            // // item: "Select Item",
            selectedHours: 0,

            selectedMinutes: 0,

            isVisible: false,
            email: '', password: '', errorMessage: null
        };
        // _.bindAll(this, ['showPopover', 'closePopover', 'setItem']);
    }

    //firebase 
    writeArtisanData() {
        firebase.database().ref('Artisans/').push(this.state).then((data) => {
            //success callback
            this.props.navigation.navigate('TabNavigator')
            console.log('data ', data)
        }).catch((error) => {
            //error callback
            console.log('error ', error)
        })
    }
    handleSignUp = () => {
        console.log("email", this.state.email)
        console.log("pwd", this.state.password)
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.writeArtisanData()
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    // //select
    // showPopover() {
    //     this.setState({ isVisible: true });
    // }

    // closePopover() {
    //     this.setState({ isVisible: false });
    // }

    // setItem(item) {
    //     this.setState({ item: item });
    // }
    //timepicker
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
    };


    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const { selectedHours, selectedMinutes } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2017, 6, 3);
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        // const { selectedCity } = this.props;
        // const items = [
        //     "Item 1jjkjkjljjkj",
        //     "Item 2jlkkn,;",
        //     "Item 3",
        //     "Item 4",
        // ];
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./images/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.lowerContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: 'row', width: width(95), backgroundColor: 'transparent', marginTop: height(1) }}>
                                <View style={{ width: 50, height: 50 }}>
                                    <Image source={require('./images/logooo.png')} style={{ height: 25, width: 50 }} />
                                </View>
                            </View>

                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ Name: value })}
                                    placeholder='Name'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}

                                />
                            </View>

                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ Speciality: value })}
                                    placeholder='Your Specialite'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />

                            </View>

                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ email: value })}
                                    placeholder='Email'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />
                            </View>

                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ password: value })}
                                    placeholder='password'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />
                            </View>
                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ Phone: value })}
                                    placeholder='Phone'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />
                            </View>
                            <View style={styles.schoolInputContainer}>
                                <TouchableOpacity title="Show DatePicker" onPress={this.showDateTimePicker} style={styles.TxtInputSchool}
                                    placeholder='birthday '
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent' ><Text style={{ color: 'black' }}>your birthday</Text></TouchableOpacity>
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this.handleDatePicked}
                                    onCancel={this.hideDateTimePicker}
                                />

                            </View>
                            <View style={styles.schoolInputContainer}>
                                <TextInput
                                    onChangeText={(value) => this.setState({ CompanyName: value })}
                                    placeholder='Company Name'
                                    placeholderTextColor='black'
                                    underlineColorAndroid='transparent'
                                    style={styles.TxtInputSchool}
                                />
                            </View>
                            <View style={styles.schoolInputContainer}>
                                <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', textShadowRadius: 200, textAlignVertical: 'center' }}> Work timetable : When you Start ?  </Text>
                            </View>
                            
                            <View style={{width: width(75),height: height(6), alignItems: 'center',justifyContent: 'center',  backgroundColor: '#efebe9',
                                fontSize: totalSize(1.5), backgroundColor: 'white',
                                alignSelf: 'center'}} >
                                    <TimePicker
                                        selectedHours={selectedHours}
                                        //initial Hourse value
                                        selectedMinutes={selectedMinutes}
                                        //initial Minutes value
                                        onChange={(hours, minutes) => this.setState({
                                            selectedHours: hours, selectedMinutes: minutes
                                        })}
                                    />
                            </View>
                            <View style={{width: width(75),height: height(6), alignItems: 'center',justifyContent: 'center',  backgroundColor: '#efebe9',
                                fontSize: totalSize(1.5), backgroundColor: 'white',
                                alignSelf: 'center'}}>
                                <Text style={{ backgroundColor: 'white',color:'black', justifyContent: 'center', alignItems: 'center', textShadowRadius: 200, textAlignVertical: 'center' }}> {selectedHours}hr:{selectedMinutes}min  </Text>
                            </View>
                            
                
                            <View style={styles.schoolInputContainer}>
                                <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', textShadowRadius: 200, textAlignVertical: 'center' }}> Work timetable : When you Finish  ?  </Text>
                            </View>
                            
                            <View style={{width: width(75),height: height(6), alignItems: 'center',justifyContent: 'center',  backgroundColor: '#efebe9',
                                fontSize: totalSize(1.5), backgroundColor: 'white',
                                alignSelf: 'center'}} >
                                    <TimePicker
                                        selectedHours={selectedHours}
                                        //initial Hourse value
                                        selectedMinutes={selectedMinutes}
                                        //initial Minutes value
                                        onChange={(hours, minutes) => this.setState({
                                            selectedHours: hours, selectedMinutes: minutes
                                        })}
                                    />
                            </View>
                            <View style={{width: width(75),height: height(6), alignItems: 'center',justifyContent: 'center',  backgroundColor: '#efebe9',
                                fontSize: totalSize(1.5), backgroundColor: 'white',
                                alignSelf: 'center'}}>
                                <Text style={{ backgroundColor: 'white',color:'black', justifyContent: 'center', alignItems: 'center', textShadowRadius: 200, textAlignVertical: 'center' }}> {selectedHours}hr:{selectedMinutes}min  </Text>
                            </View>
                            {/* <View style={{ flex:1 ,width: width(75),height: height(6), alignItems: 'center',justifyContent: 'center',  backgroundColor: '#efebe9',
                                fontSize: totalSize(1.5), backgroundColor: 'white',  marginVertical: height(1),
                                alignSelf: 'center'}}>
                                <TouchableHighlight onPress={this.showPopover}>
                                    <Text>{this.state.item}</Text>
                                </TouchableHighlight> 
                                <ListViewSelect
                                    list={items}
                                    isVisible={this.state.isVisible}
                                    onClick={this.setItem}
                                    onClose={this.closePopover}
                                    style={{width:80 , height:80 }}
                                />
                            </View> */}




                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => this.handleSignUp()}>
                                    <View style={styles.btnTxtContainer}>
                                        {
                                            this.state.loading === true ?
                                                <ActivityIndicator size={'small'} color='white' />
                                                :
                                                <Text style={styles.btnTxt}> Save </Text>
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
export default Formhandyman;


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
        backgroundColor: 'white',
        fontSize: totalSize(1.5),
        //color: 'rgb(217,217,217)'
        color: 'black',
        //marginVertical:height(2),
        //borderRadius: 25,
    },
    lowerContainer: {
        //flex: 1,
        // width: width(100),
        //height: null,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
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
        marginVertical: height(0.5),
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
        marginVertical: height(2),
        elevation: 5

    },


});
