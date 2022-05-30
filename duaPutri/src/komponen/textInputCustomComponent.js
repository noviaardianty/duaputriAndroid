import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputCustom = ({
    onChangeText,
    value = "",
    label = "",
    placeholder = "",
    keyboardType = "default",
}) => (
    <View style={{
        marginHorizontal: 10,
        marginTop: 10,
    }}>
        <Text style={{
            marginLeft: 10,
        }}>{label}: </Text>
        <View style={{
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
        }}>
            <TextInput
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                style={{
                    color: 'black'
                }}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    </View>
);

export default TextInputCustom;
