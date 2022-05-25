import React from 'react';
import { Text, View } from 'react-native';

const ItemComponent = ({
    name = "",
    value = "",    
    flexA = 0.5,
    flexB = 1,
}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <View style={{
            flex: flexA,
        }}>
            <Text>{name}</Text>
        </View>
        <View style={{
            flex: flexB,
        }}>
             <Text>
                : {value}
             </Text>
        </View>
    </View>
)

export default ItemComponent;
