import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowLongRightIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import sanityClient ,{urlFor}from "../sanity";

const FeaturedRow = ({ id, text, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  // console.log(
  //   "🚀 ~ file: FeaturedRow.js:12 ~ FeaturedRow ~ restaurants",
  //   restaurants
  // );
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
      }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurant));
  }, []);

  return (
    <View>
      <View className="flex-row justify-between px-4 items-center mt-4">
        <Text className="font-bold text-lg">{text}</Text>
        <ArrowRightCircleIcon fill={"#00ccbb"} size={30} color="#fff" />
      </View>
      <Text className="text-gray-500 text-sm px-4">{description}</Text>

      <ScrollView
        horizontal
        className="pt-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards
              key={restaurant._id}
              id={restaurant._id}
              imageUrl={urlFor(restaurant.image.asset._ref).url()}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant?.type.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
