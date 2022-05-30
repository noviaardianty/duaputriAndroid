import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { asEmptyUsername } from '../../konfig/storage';

const BerandaScreen = (props) => (
    <SafeAreaView>
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
    </SafeAreaView>
);

export default BerandaScreen;
