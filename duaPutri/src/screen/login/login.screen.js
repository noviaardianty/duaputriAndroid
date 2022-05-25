import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {
    return (
        <View style={{
            backgroundColor: "#0d2821",
            flex: 1,
            alignItems: "center",
            paddingTop: 100,
        }}>
            <Text style={{
                fontSize: 18,
                color: "#cf9c49",
            }}>Sign In</Text>
            <View style={{
                marginTop: 80,
                padding: 30,
                width: '75%',
            }}>
                <View style={{
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 10,
                    borderColor: 'white',
                }}>
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor={'white'}
                    />
                </View>
                <View style={{
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    marginTop: 8,
                    borderRadius: 10,
                    borderColor: 'white',
                }}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor={'white'}
                    />
                </View>
                <View style={{
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        width: '100%',
                        borderRadius: 25,
                    }} onPress={() => props.navigation.replace('homescreen')}>
    
                        <Text style={{
                            fontSize: 15,
                            textAlign: 'center',
                        }}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
    
        </View >
    )
};

export default LoginScreen;
