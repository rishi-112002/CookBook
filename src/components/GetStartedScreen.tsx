import { useNavigation } from "@react-navigation/native";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function GetStartedScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: 'rgba(245 ,158 ,11 ,0.9)', flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify().damping(15)}>
                    <Image source={require("../../assests/images/getstarted.jpg")} style={{ width: "100%", height: 350, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
                </Animated.View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '800' }}>
                        Cooking a Delicious
                    </Text>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: '800' }}>
                        Food Easily
                    </Text>
                    <Text style={{ color: 'white', fontWeight: '400', marginTop: 5, fontSize: 15 }}>
                        Discover more than 1200 food recipies in your hands and cooking it easily
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, marginTop: 20, borderRadius: 15 }} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, marginTop: 20, borderRadius: 15 }} onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(9), fontWeight: '600', color: 'black', fontSize: hp(2.3) }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}
export default GetStartedScreen;