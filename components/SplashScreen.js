import React, {useEffect} from 'react';
import { View, Button, Text } from 'react-native';

const SplashScreen = ( {navigation} ) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text> Splash Screen</Text>
        })
    }, [])

    const onPressButton = () => {
        navigation.push('loginScreen');
        // navigation.replace('loginScreen');
    }

    return (
        <View>
            <Button title='Login' onPress={onPressButton} />
        </View>
    )
};

export default SplashScreen;