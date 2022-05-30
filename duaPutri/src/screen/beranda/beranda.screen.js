import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { asEmptyUsername } from '../../konfig/storage';
const welcomeImg = require('../../aset/icon/welcome.png');
const BerandaScreen = (props) => (
    <SafeAreaView style={{
        flex: 1,
    }}>
        <View style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={() => {
            Alert.alert('Konfirmasi Logout!', 'Apakah anda yakin akan logout?', [
                {
                    onPress: () => {
                        asEmptyUsername().then(() => {
                            props.navigation.reset({
                                index: 0,
                                routes: [{
                                    name: 'loginscreen',
                                }]
                            })
                        });
                    },
                    style: 'default',
                    text: 'Ya'
                },
                {
                    onPress: () => {

                    },
                    style: 'cancel',
                    text: 'Tidak'
                }
            ], {
                cancelable: false,
            })
        }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                marginVertical: 5,
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 22,
                }}>
                    Selamat Datang di Dua Putri
                </Text>
            </View>
            <Image 
                source={welcomeImg}
                style={{
                    width: '80%',
                    resizeMode: 'contain'
                }}
            />
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('homescreen')}>
                <Text>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

export default BerandaScreen;
