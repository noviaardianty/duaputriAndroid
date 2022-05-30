import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import { asGetUsername } from '../../konfig/storage';

const logo = require('../../aset/icon/logo.png')

const SCScreen = ({
    navigation
}) => {

    React.useEffect(() => {
        checkUsername()
    }, []);

    var checkUsername = () => {
        asGetUsername().then((e) => {
            if (e.response == "success") setTimeout(() => navigation.replace('berandascreen'), 2000);
            else setTimeout(() => navigation.replace('loginscreen'), 2000);
        })
    }

    return (
        <View style={{
            alignItems: 'center',
            backgroundColor: '#0d2821',
            justifyContent: 'center',
            flex: 1,
        }}>
            <Image
                source={logo}
            />
        </View>
    
    
    );
}

export default SCScreen;

