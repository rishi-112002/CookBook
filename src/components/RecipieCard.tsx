import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Image, Text } from "react-native"
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function RecipieCard({ item, index }) {
    const navigation = useNavigation()
    let isEven = index % 2 == 0;
    return (
        <View>
            <Pressable style={{ width: "100%", alignItems: 'center', paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }} onPress={()=> navigation.navigate("RecipieDetailScreen" , item)}>
                <Image source={{ uri: item.strMealThumb }} style={{ width: '100%', height: index % 3 == 0 ? hp(35) : hp(25), borderRadius: hp(7) }} />
                <Text style={{ fontSize: hp(1.7), paddingStart: hp(0.3), color: 'black', fontWeight: '600' }}>
                    {item.strMeal.length>20 ? item.strMeal.slice(0,20)+"....." : item.strMeal}
                </Text>
            </Pressable>
        </View>
    )

}
export default RecipieCard;