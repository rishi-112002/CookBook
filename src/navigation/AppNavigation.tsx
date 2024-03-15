import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipieDetailScreen from '../screens/RecipieDetailScreen';
import GetStartedScreen from '../components/GetStartedScreen';
import Login from '../authenticate/Login';
import SignUp from '../authenticate/SignUp';
const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen component={SignUp} name="SignUp" />
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={RecipieDetailScreen} name="RecipieDetailScreen" />
                <Stack.Screen component={GetStartedScreen} name="GetStartedScreen" />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
