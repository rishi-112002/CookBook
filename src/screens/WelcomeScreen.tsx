import React, { useEffect } from 'react';
import {
    Image,
    StatusBar,
    Text, Touchable, TouchableOpacity, View,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
function WelcomeScreen() {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);
    const navigation = useNavigation()
    useEffect(() => {
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value + hp(5)), 150)
        setTimeout(() => ring2padding.value = withSpring(ring2padding.value + hp(5.5)), 350)
        // setTimeout(()=> navigation.navigate("Home") , 2500)
    }, []
    )
    return (
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: 'rgba(245 ,158 ,11 ,0.9)' }}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <Animated.View style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 999, padding: ring2padding }} >
                <Animated.View style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 999, padding: ring1padding }} >
                    <Image source={require("../../assests/images/foodImages.jpg")} style={{ width: hp(22), height: hp(22), borderRadius: hp(11) }} />
                </Animated.View >
            </Animated.View >
            <View style={{ alignItems: 'center', marginTop: hp(5) }}>
                <Text style={{ color: 'white', fontSize: hp(5), fontWeight: '700' }}>
                    CookPad
                </Text>
                <Text style={{ color: 'white', fontSize: hp(2.8), fontStyle: 'italic', fontWeight: "600" }}>
                    From kitchen to plate, flavors await
                </Text>
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, marginTop: 20, borderRadius: 15 }} onPress={()=> navigation.navigate("GetStartedScreen")}>
                    <Text style={{ marginStart: hp(9), marginEnd: hp(9)  , fontWeight:'600' , color:'black' , fontSize:hp(2.3)}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default WelcomeScreen;
