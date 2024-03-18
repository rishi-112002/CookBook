import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipieDetailScreen from '../screens/RecipieDetailScreen';
import GetStartedScreen from '../components/GetStartedScreen';
import Login from '../authenticate/Login';
import SignUp from '../authenticate/SignUp';
import Forgot from '../authenticate/Forgot';
import AddRecipieScreen from '../screens/AddRecipieScreen';
const Stack = createNativeStackNavigator();

function AppNavigation() {
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
