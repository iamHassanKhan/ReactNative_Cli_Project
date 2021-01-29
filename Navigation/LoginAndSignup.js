import React, {Component} from 'react';
import {
  View,
  Picker,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

var SoftBar = '';
export default class CalenderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
      iconName: 'ios-eye',
      iconNameConfirm: 'ios-eye',
      iconNameSignUp: 'ios-eye',
      secure: true,
      secureSignUp: true,
      secureConfirm: true,
      isLoading: false,
      focusButton: true,
      firstName: '',
      passwordConfirm: '',
      passwordSignup: '',
      emailSignup: '',
      loader: true,
      InvalidPassword: false,
      isTeacherParent : "true",
      passFocus : false,
      lastName : ''
    };
  }

  async onLoginClick(email,password) {
    const reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    var reg2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (password == '') {
      ToastAndroid.show('Password is empty', ToastAndroid.SHORT, ['UIAlertController']);
      this.setState({
        isLoading: false,
      });
      return;
    } else if (!reg2.test(password)) {
        ToastAndroid.show('Password format is invalid', ToastAndroid.SHORT, [
        'UIAlertController',
      ]);
      this.setState({
        isLoading: false,
      });
      return;
    }
    if (email == '') {
      ToastAndroid.show('Email is empty', ToastAndroid.SHORT, ['UIAlertController']);
      this.setState({
        isLoading: false,
      });
      return;
    } else if (!reg.test(email)) {
      ToastAndroid.show('Email is invalid', ToastAndroid.SHORT, ['UIAlertController']);
      this.setState({
        isLoading: false,
      });
      return;
    }
}

  async createAccount(email,password,passwordConfirm, firstName) {
    const reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const reg2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (reg.test(email) === true) {
      if (reg2.test(password) === true) {
        this.setState({
          InvalidPassword: false,
        });
        if (
          password != '' &&
          passwordConfirm != '' &&
          password == passwordConfirm
        ) {

  }
}
    }
}

  HideShowTask() {
    if (this.state.secure == false) {
      this.setState({
        iconName: 'ios-eye',
        secure: !this.state.secure,
      });
    } else {
      this.setState({
        iconName: 'ios-eye-off',
        secure: !this.state.secure,
      });
    }
  }

  HideShowTaskConfirm() {
    if (this.state.secureConfirm == false) {
      this.setState({
        iconNameConfirm: 'ios-eye',
        secureConfirm: !this.state.secureConfirm,
      });
    } else {
      this.setState({
        iconNameConfirm: 'ios-eye-off',
        secureConfirm: !this.state.secureConfirm,
      });
    }
  }

  HideShowTaskSignUp() {
    if (this.state.secureSignUp == false) {
      this.setState({
        iconNameSignUp: 'ios-eye',
        secureSignUp: !this.state.secureSignUp,
      });
    } else {
      this.setState({
        iconNameSignUp: 'ios-eye-off',
        secureSignUp: !this.state.secureSignUp,
      });
    }
  }

  render() {
      return (
        <View style={{flex: 1, backgroundColor: '#ecf0f1'}}>
          <ScrollView contentInsetAdjustmentBehavior={'automatic'} showsVerticalScrollIndicator={false} >
                <View style={{
                    justifyContent : 'flex-end',
                    height : hp(97)
                  }} >
                      {
                          this.state.focusButton ?
                          <Image style={{height : 70, width : 70, alignSelf : 'center', tintColor : 'red', marginBottom : hp(20)}} source={require('../assets/happy.png')} ></Image>
                          :
                          null
                      }
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      disabled={this.state.isLoading}
                      onPress={() =>
                        this.setState({
                          iconName: 'ios-eye',
                          focusButton: true,
                          isLoading: false,
                        })
                      }
                      style={{
                        width: '50%',
                        paddingVertical : hp(3),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: this.state.focusButton
                            ? 'red'
                            : 'grey',
                        }}>
                        Login
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={this.state.isLoading}
                      onPress={() =>
                        this.setState({
                          iconNameConfirm: 'ios-eye',
                          iconNameSignUp: 'ios-eye',
                          focusButton: false,
                        })
                      }
                      style={{
                        width: '50%',
                        paddingVertical : hp(3),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color:
                            this.state.focusButton == false
                              ? 'red'
                              : 'grey',
                        }}>
                        Create Account
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {this.state.focusButton ? (
                    <View
                      style={{backgroundColor: 'white', paddingHorizontal: 10, elevation : 2}}>
                      <Text
                        style={{
                          fontSize: 18,
                          marginTop: 15,
                          marginLeft: 5,
                        }}>
                        Welcome Back
                      </Text>
                      <View
                        style={{
                          borderBottomColor: '#ECECEC',
                          borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 20,
                            marginLeft: 5,
                            color: 'grey',
                          }}>
                          Email Address
                        </Text>
                        <TextInput
                          onChangeText={val => this.setState({email: val})}
                          keyboardType='email-address'
                          style={{
                            fontSize: 16,
                            height: hp(6.5)
                          }}
                          onSubmitEditing={() => { this.secondTextInput.focus(); }}
                          blurOnSubmit={false}
                          placeholder={'Enter your email'}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 10,
                          marginLeft: 5,
                          color: 'grey',
                        }}>
                        Password
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderBottomColor: '#ECECEC',
                          borderBottomWidth: 1,
                        }}>
                        <TextInput
                          onSubmitEditing={() => {
                            this.setState({isLoading: true});
                            this.onLoginClick(this.state.email , this.state.password);
                          }}
                          secureTextEntry={this.state.secure}
                          style={{
                            fontSize: 16,
                            height: hp(6.5),
                            width: '90%',
                          }}
                          ref={(input) => { this.secondTextInput = input; }}
                          placeholder="Enter your password"
                          keyboardType="default"
                          autoCapitalize="none"
                          underlineColorAndroid="transparent"
                          windowSoftInputMode="adjustPan"
                          onChangeText={val => this.setState({password: val})}
                        />
                        <TouchableOpacity
                          style={{justifyContent: 'center'}}
                          onPress={() => this.HideShowTask()}>
                          <Icon
                            name={this.state.iconName}
                            size={25}
                            color="#ddd"
                          />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          paddingVertical : hp(3),
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          backgroundColor: 'white',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'red',
                              fontSize: 12,
                            }}>
                            Forgot Password ?
                          </Text>
                        </TouchableOpacity>
                          <TouchableOpacity
                          disabled={this.state.isLoading}
                            style={{
                              backgroundColor: 'red',
                              // height: 35,
                              paddingVertical : hp(1.5),
                              justifyContent: 'center',
                              alignSelf : 'center',
                              width : wp(30),
                              borderRadius: 5,
                            }}
                            onPress={() => {
                              this.setState({isLoading: true});
                              this.onLoginClick(this.state.email , this.state.password);
                            }}>
                              {
                                this.state.isLoading ?
                                <ActivityIndicator color={'white'} size={20} />
                                :
                            <Text
                              style={{
                                fontSize: 16,
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              Login
                            </Text>
                              }
                          </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{backgroundColor: 'white', paddingHorizontal: 10}}>
                      <Text
                        style={{
                          fontSize: 18,
                          marginTop: 15,
                          marginLeft: 5,
                        }}>
                        Be a part
                      </Text>
                      <View
                        style={{
                          borderBottomColor: '#ECECEC',
                          borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 20,
                            marginLeft: 5,
                            color: 'grey',
                          }}>
                          First Name
                        </Text>
                        <TextInput
                          onChangeText={val => this.setState({firstName: val})}
                          style={{
                            fontSize: 16,
                            height: hp(6.5)
                          }}
                          onSubmitEditing={() => { this.emailSignup.focus(); }}
                          blurOnSubmit={false}
                          placeholder={'Enter your name'}
                        />
                      </View>
                      <View
                        style={{
                          borderBottomColor: '#ECECEC',
                          borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 20,
                            marginLeft: 5,
                            color: 'grey',
                          }}>
                          Last Name
                        </Text>
                        <TextInput
                          onChangeText={val => this.setState({lastName: val})}
                          style={{
                            fontSize: 16,
                            height: hp(6.5)
                          }}
                          onSubmitEditing={() => { this.emailSignup.focus(); }}
                          blurOnSubmit={false}
                          placeholder={'Enter your name'}
                        />
                      </View>
                      <View
                        style={{
                          borderBottomColor: '#ECECEC',
                          borderBottomWidth: 1,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            marginTop: 10,
                            marginLeft: 5,
                            color: 'grey',
                          }}>
                          Email Address
                        </Text>
                        <TextInput
                          onChangeText={val =>
                            this.setState({emailSignup: val})
                          }
                          style={{
                            fontSize: 16,
                            height: hp(6.5)
                          }}
                          keyboardType='email-address'
                          ref={(input) => { this.emailSignup = input; }}
                          onSubmitEditing={() => { this.passwordSignup.focus(); }}
                          blurOnSubmit={false}
                          placeholder={'Enter your email'}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 10,
                          marginLeft: 5,
                          color: this.state.InvalidPassword
                            ? 'red'
                            : 'grey',
                        }}>
                        Password
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderBottomWidth: 1,
                          borderBottomColor: this.state.InvalidPassword
                            ? 'red'
                            : '#ECECEC',
                        }}>
                        <TextInput
                          //  onSubmitEditing={() => {
                          //    this.setState({isLoading: true});
                          //    this.onLoginClick();
                          //  }}
                          secureTextEntry={this.state.secureSignUp}
                          style={{
                            fontSize: 16,
                            height: hp(6.5),
                            width: '90%'
                          }}
                          placeholder="Password"
                          keyboardType="default"
                          autoCapitalize="none"
                          ref={(input) => { this.passwordSignup = input; }}
                          onSubmitEditing={() => { this.confirmPasswordSignUP.focus(); }}
                          blurOnSubmit={false}
                          underlineColorAndroid="transparent"
                          windowSoftInputMode="adjustPan"
                          onChangeText={val =>
                            this.setState({passwordSignup: val})
                          }
                        />

                        <TouchableOpacity
                          style={{justifyContent: 'center'}}
                          onPress={() => this.HideShowTaskSignUp()}>
                          <Icon
                            name={this.state.iconNameSignUp}
                            size={25}
                            color="#ddd"
                          />
                        </TouchableOpacity>
                      </View>
                      {this.state.InvalidPassword ? (
                        <Text
                          style={{
                            color: 'red',
                            fontSize: 12,
                            paddingVertical: 5,
                          }}>
                          Password at least 6 char long and have at least one non alphanumeric character , one digit ('0'-'9'), one uppercase ('A'-'Z') and one lowercase ('a'-'z').
                        </Text>
                      ) : null}

                      <Text
                        style={{
                          fontSize: 10,
                          marginTop: 10,
                          marginLeft: 5,
                          color: 'grey',
                        }}>
                        Confirm password
                      </Text>
                      <View
                        style={{
                          flexDirection : 'row',
                          borderBottomWidth : 1,
                          borderBottomColor: '#ECECEC',
                        }}>
                        <TextInput
                          onSubmitEditing={() => {
                            this.setState({isLoading: true});
                            this.createAccount(this.state.emailSignup,this.state.passwordSignup,this.state.passwordConfirm,this.state.firstName);
                          }}
                          secureTextEntry={this.state.secureConfirm}
                          style={{
                            fontSize: 16,
                            height: hp(6.5),
                            width: '90%',
                          }}
                          placeholder="Confirm Password"
                          keyboardType="default"
                          autoCapitalize="none"
                          ref={(input) => { this.confirmPasswordSignUP = input; }}
                          underlineColorAndroid="transparent"
                          windowSoftInputMode="adjustPan"
                          onChangeText={val =>
                            this.setState({passwordConfirm: val})
                          }
                        />
                        <TouchableOpacity
                          style={{justifyContent: 'center'}}
                          onPress={() => this.HideShowTaskConfirm()}>
                          <Icon
                            name={this.state.iconNameConfirm}
                            size={25}
                            color="#ddd"
                          />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          paddingVertical : hp(3),
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          backgroundColor: 'white',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'red',
                              fontSize: 12,
                            }}>
                            I agree to terms and conditions
                          </Text>
                        </TouchableOpacity>
                          <TouchableOpacity
                          disabled={this.state.isLoading}
                          style={{
                            backgroundColor: 'red',
                            // height: 35,
                            paddingVertical : hp(1.5),
                            justifyContent: 'center',
                            alignSelf : 'center',
                            width : wp(30),
                            borderRadius: 5,
                          }}
                            onPress={() => {
                              this.setState({isLoading: true});
                              this.createAccount(this.state.emailSignup,this.state.passwordSignup,this.state.passwordConfirm,this.state.firstName);
                            }}>
                              {
                                this.state.isLoading ?
                                <ActivityIndicator color={'white'} size={20} />
                                :
                            <Text
                              style={{
                                fontSize: 16,
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              Sign Up
                            </Text>
                              }
                          </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
                </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: hp(6.5),
  },
  inputIcon: {
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginLeft: '90%',
  },
  inputs: {
    height: hp(7),
    marginLeft: 5,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: '#555566',
    marginTop: 5,
  },
});
