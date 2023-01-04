import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RestaurantScreen = ({ route, navigation }) => {
  let {
    id,
    imageUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;

  return (
    <View className='flex-1'>
        <Image
        source={{ uri: imageUrl }}
        className="w-full h-64 rounded-bl-lg rounded-br-lg object"
        />
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
