import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
function Forgot() {
    const [email, setEmail] = useState("")
    const navigation = useNavigation();
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Warning", "Entered Email is inValid")
            return true;
        }
    };
    const ForgotPass = () => {
        if (!email) {
            Alert.alert("Warning", "please enter email")
        }
        if (!validateEmail(email)) {
            Alert.alert("Successful", `Your forgot password link is sent to ${email}`)
        }
    }
    return (
        <ScrollView style={{ backgroundColor: 'rgba(245 ,158 ,11 ,0.9)', flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify().damping(15)}>
                    <Image source={require("../../assests/images/loginImage.jpg")} style={{ width: "100%", height: 330, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
                </Animated.View>
                <Animated.View entering={FadeIn.delay(200).duration(100)} style={{ width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14 }}>
                    <TouchableOpacity style={{ marginLeft: 10, padding: 4, backgroundColor: '#fbbf24', borderRadius: 20 }} onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={hp(3.8)} strokeWidth={4.5} color={"white"} />
                    </TouchableOpacity>
                </Animated.View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 10,
                            marginTop: 10,
                            color: "black",
                            fontSize: hp(2.4)
                        }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email.trim()}
                        onChangeText={(email) => setEmail(email.trim())}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, marginTop: 15, borderRadius: 15 }} onPress={ForgotPass}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            Forgot
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )

}
export default Forgot;