import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItem, selectBasketTotal } from "../features/BasketSlice";

const BasketComp = () => {
  const basketItems = useSelector(selectBasketItem);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if(basketItems.length === 0) return null
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("BasketScreen");
      }}
      className={`absolute bottom-6 w-[90%] 
    self-center mx-4 p-4 rounded-lg bg-[#00ccbb] z-50`}
    >
      <View className="flex-row space-x-2">
        <Text className="font-bold text-lg text-gray-600  bg-[#00aabb] px-2">
          {basketItems.length}
        </Text>
        <Text className="ml-4 font-bold text-lg text-gray-600 text-center flex-1">
          View Basket
        </Text>
        <Text className="mr-4 font-bold text-lg text-gray-600">
          {basketTotal}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketComp;
