import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import Animated, { FadeIn } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const AddRecipieScreen = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [ingredientWeight, setIngredientWeight] = useState('');

    const handleSave = () => {
        // You can implement the logic for saving the recipe here
        console.log('Recipe saved!');
        console.log('Recipe Name:', recipeName);
        console.log('Ingredients:', ingredients);
        console.log('Instructions:', instructions);
        console.log('Cooking Time:', cookingTime);
        console.log('Ingredient Weight:', ingredientWeight);
    };
    const navigation = useNavigation();

    return (
        <ImageBackground source={require("../../assests/images/image.jpeg")} style={styles.container}>
            <Animated.View entering={FadeIn.delay(200).duration(100)} style={{ width: '100%', position: 'absolute', top: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14 }}>
                <TouchableOpacity style={{ marginLeft: 10, padding: 4, backgroundColor: '#fbbf24', borderRadius: 15 }} onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={hp(3.8)} strokeWidth={4.5} color={"white"} />
                </TouchableOpacity>
            </Animated.View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Recipe Name"
                    value={recipeName}
                    onChangeText={text => setRecipeName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredients"
                    multiline={true}
                    numberOfLines={4}
                    value={ingredients}
                    onChangeText={text => setIngredients(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Instructions"
                    multiline={true}
                    numberOfLines={4}
                    value={instructions}
                    onChangeText={text => setInstructions(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cooking Time"
                    value={cookingTime}
                    onChangeText={text => setCookingTime(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingredient Weight"
                    value={ingredientWeight}
                    onChangeText={text => setIngredientWeight(text)}
                />
                <Button title="Save" onPress={handleSave} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        padding: 20,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddRecipieScreen;
