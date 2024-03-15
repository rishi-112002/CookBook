import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View, Image, StatusBar, TextInput, BackHandler
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import axios from 'axios';
import Recipies from '../components/Recipies';

function HomeScreen() {
  const [activeCategorie, setActiveCategory] = useState("Beef")
  const [categories, setCategories] = useState([])
  const [recipiesData, setRecipiesData] = useState([])

  const handleCategoryChange = (category: React.SetStateAction<string>) => {
    getRecipies(category)
    setActiveCategory(category)
    setRecipiesData([])

  }
  const handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    getCategories();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandler.remove();
    }

  }, [])
  const getCategories = async () => {
    try {
      const response = axios.get("https://themealdb.com/api/json/v1/1/categories.php")
      if (response && (await response).data) {
        setCategories((await response).data.categories)
      }
    }
    catch (error) {
      console.log("error ", error.message);

    }

  }
  const getRecipies = async (category: React.SetStateAction<string>) => {
    try {
      const response = axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)


      if (response && (await response).data) {
        setRecipiesData((await response).data.meals)
      }
    }
    catch (error) {
      console.log("error ", error.message);

    }

  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ margin: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Image source={require("../../assests/images/avtar.png")} style={{ height: hp(5), width: hp(5), borderRadius: 15 }} />
          <BellIcon size={hp(4)} color={"gray"} />
        </View>
        <View style={{ marginStart: 16, flexDirection: 'column' }}>
          <Text style={{ color: 'black', fontSize: hp(2) }}>
            Hello , nobody!
          </Text>
          <Text style={{ color: 'black', fontSize: hp(3.8), fontWeight: '500' }}>
            make your own food
          </Text>
          <Text style={{ color: 'black', fontSize: hp(3.8), fontWeight: '500' }}>
            stay at home
            <Text style={{ color: 'orange' }}>
              hello
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10, backgroundColor: '#E8E9EB', borderRadius: 20, flex: 1, justifyContent: 'space-between' }}>
          <TextInput placeholder='search any recipie'
            placeholderTextColor={"#63645E"}
            style={{ fontSize: hp(2.5), marginStart: 10 }} />
          <View style={{ backgroundColor: 'white', borderRadius: 20, margin: 5, padding: 7 }}>
            <MagnifyingGlassIcon size={hp(3)} strokeWidth={3} color={"#63645E"} style={{ marginTop: hp(0.7) }} />
          </View>
        </View>
        <View>
          {categories.length > 0 && <Categories categories={categories} activeCategory={activeCategorie} setActiveCategory={handleCategoryChange} />}
        </View>
        <View>{
          categories.length > 0 &&
          <Recipies recipies={recipiesData} categories={categories} />}
        </View>
      </ScrollView>
    </View>
  );
}



export default HomeScreen;
