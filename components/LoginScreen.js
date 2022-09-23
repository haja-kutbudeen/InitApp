import React, {useEffect} from 'react';
import { View, Button, Text } from 'react-native';

const LoginScreen = ( {navigation} ) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text> Login Screen</Text>
        })
    }, [])

    const gotoHomePage = () => {
        navigation.push('homeTabs');
    }
    
    return (
        <View>
            <Button title='Splash' onPress={gotoHomePage}  />
        </View>
    )
};

export default LoginScreen;