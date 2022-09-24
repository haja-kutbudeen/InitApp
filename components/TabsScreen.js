import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

export const Home = () => {
    return (
        <View
        style={{
            backgroundColor: 'black',
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <Text style={{color: 'white', fontSize: 21}}> Home </Text>
        </View>
    )
};

export const Profile = () => {
    return (
        <View
        style={{
            backgroundColor: 'black',
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <Text style={{color: 'white', fontSize: 21}}> Profile</Text>
        </View>
    )
};

export const Settings = () => {
    return (
        <View
        style={{
            backgroundColor: 'black',
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        }}>
            <Text style={{color: 'white', fontSize: 21}}> Settings </Text>
        </View>
    )
};
