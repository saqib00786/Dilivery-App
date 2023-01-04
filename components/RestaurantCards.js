import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCards = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("RestaurantScreen", {
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
        })
      }
      className="shadow bg-white rounded-lg mr-4 w-52"
    >
      <Image
        source={{ uri: imageUrl}}
        className="w-52 h-48 rounded-tl-lg rounded-tr-lg object-contain"
      />

      <View className="pb-3 ">
        <Text className="font-bold text-black text-lg px-3">{title}</Text>
        <View className="flex-row items-center px-2">
          <StarIcon size={16} color="gray" fill={"gray"} />
          <Text className="text-gray-500 text-xs font-semibold px-2">
            <Text className="">{rating}</Text> * {genre}
          </Text>
        </View>

        <View className="flex-row mt-1 px-2">
          <MapIcon size={16} color="gray" />
          <Text
            numberOfLines={1}
            className="text-gray-500 text-xs font-semibold px-2"
          >
            Nearby * {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;

const styles = StyleSheet.create({});
