import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const HomeHeader = () => {
  return (
    <View className=" bg-white pt-8 justify-center">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/dashboard.jpg")}
          className="h-10 w-10 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-500 text-sm font-semibold">
            Hello, John
          </Text>
          <Text className="text-gray-700 font-bold text-xl">
            CIS Technology Park
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={30} color="#00ccbb" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-300 p-2">
          <MagnifyingGlassIcon size={30} color="gray" />
          <TextInput placeholder="Search" />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00ccbb" />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
