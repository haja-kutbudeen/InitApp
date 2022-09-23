import React, {useEffect} from 'react';
import { View, Button, Text } from 'react-native';

const LoginScreen = ( {navigation} ) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Text> Login Screen</Text>
        })
    }, [])

    const gotoHomeTabPage = () => {
        navigation.push('homeTabs');
    }

    const gotoHomeDrawerPage = () => {
        navigation.push('homeDrawer');
    }
    
    return (
        <View>
            <Button title='Tabs' onPress={gotoHomeTabPage}  />
            <Button title='Drawer' onPress={gotoHomeDrawerPage}  />
        </View>
    )
};

export default LoginScreen;