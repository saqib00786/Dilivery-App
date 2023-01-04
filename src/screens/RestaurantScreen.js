import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import DishRow from "../../components/DishRow";
import { urlFor } from "../../sanity";
import BasketComp from "../../components/BasketComp";

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketComp />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imageUrl }}
            className="w-full h-64 object-contain"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-6 bg-white p-2 rounded-full"
          >
            <ArrowLeftIcon size={24} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-2">
            <Text className="text-2xl font-bold">{title}</Text>
            <View className="my-1">
              <View className="flex-row items-center space-x-2">
                <StarIcon size={24} color="gray" />
                <Text className="text-sm text-gray-500">
                  <Text className="text-green-500">{rating}</Text> * {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1 border-b border-b-gray-300 pb-2">
                <MapPinIcon size={24} color="gray" />
                <Text numberOfLines={2} className="text-xs text-gray-500">
                  {address}
                </Text>
              </View>
            </View>

            <Text className="text-sm text-gray-500 pb-2">
              {short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row item-center justify-between space-x-2 p-2 border-y border-gray-300">
            <View className="flex-row">
              <QuestionMarkCircleIcon size={24} color="gray" />
              <Text> Have a food Allergy?</Text>
            </View>
            <ChevronRightIcon size={24} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className='pb-24'>
          <Text className="px-4 pt-4 mb-3 font-bold text-xl">Menu</Text>
          
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              title={dish.name}
              price={dish.price}
              imageUrl={urlFor(dish.image).url()}
              description={dish.short_description}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
