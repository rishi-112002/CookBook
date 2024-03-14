import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipieDetailScreen from '../screens/RecipieDetailScreen';
const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
                <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" />
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={RecipieDetailScreen} name="RecipieDetailScreen" />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
