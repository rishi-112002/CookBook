import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/solid";
import Animated, { FadeInDown } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function SignUp() {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Warning", "Entered Email is inValid")
            return
        }

    };
    const ValidatePassword = (pass: string) => {
        if (pass.length <= 8) {
            Alert.alert("Warning", "password is minium of 8 digits")
            return
        }

    }
    const navigateToLogin = () => {
        navigation.navigate("Login")
    }

    const SignUpCheck = () => {
        if (!name) {
            Alert.alert("Warning", "please enter name");
            return;
        }
        if (!email) {
            Alert.alert("Warning", "Please enter Your email")
            return;
        }
        if (!password) {
            Alert.alert("Warning", "please enter your Password")
            return;
        }
        if (!validateEmail(email)) {
            return;
        }
        ValidatePassword(password)
        validateEmail(email)
        navigateToLogin();

    }
    return (
        <ScrollView style={{ backgroundColor: 'rgba(245 ,158 ,11 ,0.9)', flex: 1 }} keyboardShouldPersistTaps="always">
            <View style={{ flexDirection: 'column' }}>
                <Animated.View entering={FadeInDown.delay(200).duration(1000).springify().damping(15)}>
                    <Image source={require("../../assests/images/loginImage.jpg")} style={{ width: "100%", height: 330, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
                </Animated.View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'column' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 20
                        }}
                        placeholder="name"
                        keyboardType="name-phone-pad"
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 15,
                            paddingStart: 15,
                            marginBottom: 20,
                            color: "black"
                        }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email.trim()}
                        onChangeText={(email) => setEmail(email.trim())}
                    />
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 15,
                        flexDirection: "row"

                    }}>
                        <TextInput
                            style={{ paddingRight: 10, marginStart: 13, width: '85%' }}
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}
                            value={password.trim()}
                            onChangeText={(pass) => setPassword(pass.trim())}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={{ padding: 10, marginStart: 'auto', marginTop: hp(1.1), marginEnd: hp(1) }} >
                            {passwordVisible ? <EyeIcon color={"black"} strokeWidth={15} size={hp(2.5)} /> : <EyeSlashIcon color={"black"} strokeWidth={15} size={hp(2.5)} />}
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, marginTop: 20, borderRadius: 15 }} onPress={SignUpCheck}>
                        <Text style={{ marginStart: hp(19), marginEnd: hp(0), fontWeight: '600', color: 'white', fontSize: hp(2.3) }}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Login")}>
                        <Text style={{ alignItems: 'flex-end', marginStart: hp(7), color: 'white', fontSize: hp(2.4), fontWeight: "900" }}>
                            Already have a Account Login...!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
export default SignUp;