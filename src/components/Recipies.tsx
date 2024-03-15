import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import React from "react";
import RecipieCard from "./RecipieCard";
import Loading from "./Loading";
function Recipies(props: { recipies: any  , categories:any}) {
    const { recipies , categories } = props
    return (
        <View style={{ marginLeft: 18, marginRight: 16, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: '600', fontSize: hp(3), color: 'black' }}>
                Recipies
            </Text>
            <View>
                {recipies.length == 0 || categories.length==0 ? (<Loading/>) :

                    (<MasonryList
                        data={recipies}
                        keyExtractor={(item): string => item.idMeal}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, i }) => <RecipieCard item={item} index={i} />}
                        onEndReachedThreshold={0.1}
                    />)}
            </View>
        </View>
    )

}
export default Recipies;