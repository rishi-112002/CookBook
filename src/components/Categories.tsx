import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CategoryData } from "../constants/DummyData";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
function Categories({ activeCategory, setActiveCategory, categories }) {
    return (
        <Animated.View style={{ backgroundColor: "white" }} entering={FadeInDown.duration(700).springify()}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ paddingHorizontal: 15 }} style={{ marginLeft: 1 }}>
                {
                    categories.map((cat, index) => {
                        let isActive = cat.strCategory == activeCategory;
                        let activeButtonClass = !isActive ? "white" : "#FFD700";
                        return (
                            <TouchableOpacity key={index} style={{ flex: 1, alignItems: 'center', marginVertical: 8 }} onPress={() => setActiveCategory(cat.strCategory)}>
                                <View style={{ borderRadius: hp(7), padding: hp(1.2), backgroundColor: activeButtonClass, }}>
                                    <Image source={{ uri: cat.strCategoryThumb }} style={{ width: hp(7), height: hp(7), borderRadius: hp(5), }} />
                                </View>
                                <Text style={{ fontSize: hp(1.7), paddingStart: hp(0.3), color: 'black', fontWeight: '600' }}>
                                    {cat.strCategory}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Animated.View>
    )

}
export default Categories;