var qs = require('qs');
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import api from '../../konfig/api';
import { asSetUsername } from '../../konfig/storage';

const LoginScreen = (props) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const checkLogin = () => {
        const data = qs.stringify({
            username,
            password
        });
        api
         .post('/user/api_check_login.php', data, {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            }
         })
         .then(({data}) => responseLogin(data))
         .catch((e) => console.log(e))
    }

    const responseLogin = (data) => {
        switch (data?.response) {
            case 'success':
                ToastAndroid.show('Success Login', ToastAndroid.SHORT);
                asSetUsername(username).then(() => props.navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'berandascreen'
                    }]
                }));

                break;
            
            case 'error':
                ToastAndroid.show(data?.message, ToastAndroid.SHORT);
                break;
        }
    }
    
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
                        style={{
                            color: 'white',
                        }}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
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
                        style={{
                            color: 'white',
                        }}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
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
                    }} onPress={checkLogin}>
    
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
