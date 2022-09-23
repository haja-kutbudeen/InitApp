import React, {useEffect} from 'react';
import { View, Button, Text } from 'react-native';

const LoginScreen = ( {navigation} ) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text> Login Screen</Text>
        })
    }, [])

    const onPressButton = () => {
        navigation.push('splashScreen');
        // navigation.replace('splashScreen');
    }
    
    return (
        <View>
            <Button title='Splash' onPress={onPressButton}  />
        </View>
    )
};

export default LoginScreen;