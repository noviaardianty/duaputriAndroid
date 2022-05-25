import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

const logo = require('../../aset/icon/logo.png')

const SCScreen = ({
    navigation
}) => {

    React.useEffect(() => {
        setTimeout(() => navigation.replace('loginscreen'), 2000);
    }, []);

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

