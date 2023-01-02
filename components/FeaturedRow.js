import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  ArrowLongRightIcon,
  ArrowRightCircleIcon,
} from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ id, text, description }) => {
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
        <RestaurantCards
          id={1}
          imageUrl="https://thumbs.dreamstime.com/z/knife-ham-3229445.jpg"
          title="Thai Food"
          rating={4.5}
          genre="Thai"
          address="1234 Main Street what is the name"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
          dishes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedut labore et dolore magna aliqua."
          long={-122.4194}
          lat={37.7749}
        />
        <RestaurantCards
          id={1}
          imageUrl="https://thumbs.dreamstime.com/z/knife-ham-3229445.jpg"
          title="Thai Food"
          rating={4.5}
          genre="Thai"
          address="1234 Main Street what is the name"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
          dishes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedut labore et dolore magna aliqua."
          long={-122.4194}
          lat={37.7749}
        />
        <RestaurantCards
          id={1}
          imageUrl="https://thumbs.dreamstime.com/z/knife-ham-3229445.jpg"
          title="Thai Food"
          rating={4.5}
          genre="Thai"
          address="1234 Main Street what is the name"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
          dishes="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedut labore et dolore magna aliqua."
          long={-122.4194}
          lat={37.7749}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
