import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon, ClockIcon, FireIcon } from "react-native-heroicons/outline";
import { HeartIcon, UserIcon ,Square3Stack3DIcon, UserGroupIcon} from "react-native-heroicons/solid";

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Loading from "../components/Loading";

function RecipieDetailScreen() {
    const route = useRoute();
    const data = route.params;
    const [isFav, setFav] = useState(false)
    const navigation = useNavigation()
    const [mealData, setMealData] = useState([])
    const [loading, setLoading] = useState(true)
    const getMeal = async (id: React.SetStateAction<string>) => {
        try {
            const response = axios.get(`https://themealdb.com/agitpi/json/v1/1/lookup.php?i=${id}`)

            console.log("dataformeal", (await response).data);

            if (response && (await response).data) {
                setMealData((await response).data.meals[0])
                setLoading(false)

            }
        }
        catch (error) {
            console.log("error ", error.message);

        }

    }
    useEffect(() => {
        getMeal(data.idMeal)
    }, [])
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }} style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar barStyle={"light-content"} />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={{ uri: data.strMealThumb }} style={{ width: wp(98), height: hp(50), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} />
            </View>
            <View style={{ width: '100%', position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14 }}>
                <TouchableOpacity style={{ marginLeft: 10, padding: 4, backgroundColor: 'white', borderRadius: 15 }} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={hp(3.8)} strokeWidth={4.5} color={"#fbbf24"} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10, padding: 4, backgroundColor: 'white', borderRadius: 15 }} onPress={() => setFav(!isFav)}>
                    <HeartIcon size={hp(3.8)} strokeWidth={4.5} color={isFav ? "red" : "gray"} />
                </TouchableOpacity>
            </View>
            {loading ? (<Loading />) :
                (<View style={{ paddingHorizontal: 4, flex: 1, justifyContent: 'space-between', paddingTop: 8, marginLeft: 10 }}>
                    <View>
                        <Text style={{ color: "black", fontSize: hp(3.5), fontWeight: '800', flex: 1 }}>
                            {mealData?.strMeal}
                        </Text>
                        <Text style={{ color: "gray", fontSize: hp(2), fontWeight: '500', marginLeft: 2, flex: 1 }}>
                            {mealData?.strArea}
                        </Text>
                    </View>

                    <View style={{ justifyContent: 'space-around', flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ backgroundColor: '#fbbf24', paddingTop: 2, borderRadius: 50, height: hp(15.5), width: hp(7.5) }}>
                            <View style={{ height: hp(5.5), width: hp(5.5), backgroundColor: 'white', alignItems: 'center', borderRadius: 100, marginTop: 8, marginStart: 7 }}>

                                <ClockIcon size={hp(4)} strokeWidth={2.5} color={"#525252"} style={{ margin: 4 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: 'black', marginTop: 5 }}>
                                    35
                                </Text>
                                <Text style={{ fontSize: hp(1.5), fontWeight: 'bold', color: 'black' }}>
                                    mins
                                </Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fbbf24', paddingTop: 2, borderRadius: 50, height: hp(15.5), width: hp(7.5) }}>
                            <View style={{ height: hp(5.5), width: hp(5.5), backgroundColor: 'white', alignItems: 'center', borderRadius: 100, marginTop: 8, marginStart: 7 }}>

                                <UserGroupIcon size={hp(4)} strokeWidth={2.5} color={"#525252"} style={{ margin: 4 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: 'black', marginTop: 5 }}>
                                    01
                                </Text>
                                <Text style={{ fontSize: hp(1.5), fontWeight: 'bold', color: 'black' }}>
                                    Serving
                                </Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fbbf24', paddingTop: 2, borderRadius: 50, height: hp(15.5), width: hp(7.5) }}>
                            <View style={{ height: hp(5.5), width: hp(5.5), backgroundColor: 'white', alignItems: 'center', borderRadius: 100, marginTop: 8, marginStart: 7 }}>

                                <FireIcon size={hp(4)} strokeWidth={2.5} color={"#525252"} style={{ margin: 4 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: 'black', marginTop: 5 }}>
                                    01
                                </Text>
                                <Text style={{ fontSize: hp(1.5), fontWeight: 'bold', color: 'black' }}>
                                    calories
                                </Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#fbbf24', paddingTop: 2, borderRadius: 50, height: hp(15.5), width: hp(7.5) }}>
                            <View style={{ height: hp(5.5), width: hp(5.5), backgroundColor: 'white', alignItems: 'center', borderRadius: 100, marginTop: 8, marginStart: 7 }}>

                                <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color={"#525252"} style={{ margin: 4 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <Text style={{ fontSize: hp(2.5), fontWeight: 'bold', color: 'black', marginTop: 5 }}>

                                </Text>
                                <Text style={{ fontSize: hp(1.5), fontWeight: 'bold', color: 'black' }}>
                                    Easy
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>)}
        </ScrollView>
    )
}
export default RecipieDetailScreen;