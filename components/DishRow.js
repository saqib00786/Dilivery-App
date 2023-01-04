import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MinusIcon } from "react-native-heroicons/outline";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithID,
} from "../features/BasketSlice";

const DishRow = ({ id, title, description, price, imageUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemWithID(state, id));
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToBasket({ id, title, description, price, imageUrl }));
  };

  const removeItemFromCart = () => {
    if (!items.length) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`border bg-white mx-2 my-1 border-gray-200 rounded-lg px-4 py-2 
        ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="font-semibold text-lg">{title}</Text>
            <Text>{description}</Text>
          </View>
          <View>
            <Image
              source={{ uri: imageUrl }}
              borderRadius={6}
              className="w-16 h-16 object-contain"
            />
          </View>
        </View>
        <Text className="font-semibold mt-1 text-gray-600 text-sm">
          PKR. {price}
        </Text>
      </TouchableOpacity>

      {isPressed && (
        <View className="px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromCart}
            >
              <MinusCircleIcon size={32} color={ items.length ?"#00ccbb" : 'gray'} />
            </TouchableOpacity>

            <Text className="font-semibold text-lg">{items.length}</Text>

            <TouchableOpacity onPress={addItemToCart}>
              <PlusCircleIcon size={32} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
