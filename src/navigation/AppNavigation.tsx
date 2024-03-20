import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipieDetailScreen from '../screens/RecipieDetailScreen';
import GetStartedScreen from '../components/GetStartedScreen';
import Login from '../authenticate/Login';
import SignUp from '../authenticate/SignUp';
import Forgot from '../authenticate/Forgot';
import AddRecipieScreen from '../screens/AddRecipieScreen';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();


function AppNavigation() {
    const navigation = useNavigation()
    useEffect(() => {
        // Check if email is stored in AsyncStorage
        AsyncStorage.getItem('email')
            .then((email) => {
                if (email) {
                    // If email is found, navigate to Home screen
                    navigation.navigate('Home');
                } else {
                    // If email is not found, navigate to Login screen
                    navigation.navigate('Login');
                }
            })
            .catch((error) => {
                console.error('Error retrieving email from AsyncStorage:', error);
                // If an error occurs, navigate to Login screen as a fallback
                navigation.navigate('Login');
            });
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen component={SignUp} name="SignUp" />
                <Stack.Screen component={Forgot} name="Forgot" />
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={RecipieDetailScreen} name="RecipieDetailScreen" />
                <Stack.Screen component={GetStartedScreen} name="GetStartedScreen" />
                <Stack.Screen component={AddRecipieScreen} name="AddRecipieScreen" />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
