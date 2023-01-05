import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../features/RestaurantSlice";
import {
  removeFromBasket,
  selectBasketItem,
  selectBasketTotal,
} from "../../features/BasketSlice";
import { ShoppingBagIcon, XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";

const BasketScreen = ({ navigation }) => {
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItem);
  const total = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const [groupItemsInBasket, setGroupItemInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});

    setGroupItemInBasket(groupedItems);
  }, [items]);

  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-5 bg-white border-b border-[#00ccbb] items-center justify-center pt-10 shadow">
        <View className="flex-row items-center space-x-2 pr-6">
          <ShoppingBagIcon size={40} color="#00ccbb" />
          <View>
            <Text className="text-xl font-bold text-gray-600 text-center">
              Cart
            </Text>
            <Text className="text-sm  font-bold text-gray-600 text-center">
              {restaurant.title}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-4 right-2 p-4"
        >
          <XCircleIcon size={40} color="#00ccbb" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-4 px-3 py-3 bg-white my-3 mx-3 rounded-lg shadow-lg">
        <Image
          source={require("../../assets/dashboard.jpg")}
          className="w-8 h-8 rounded-full"
        />
        <Text className="flex-1">Food Will be Delivered In 30 min!</Text>

        <TouchableOpacity>
          <Text className="text-[#00ccbb] font-bold">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="divide-y divide-gray-300">
        {Object.entries(groupItemsInBasket).map(([key, itemsInBasket]) => {
          return (
            <View
              className="flex-row space-x-2 px-2 py-2 bg-white items-center"
              key={key}
            >
              <Text className="font-semibold text-base text-slate-700">
                {itemsInBasket.length}x
              </Text>
              <Image
                source={{ uri: urlFor(itemsInBasket[0]?.imageUrl).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="font-semibold text-base text-slate-700 flex-1">
                {itemsInBasket[0]?.title}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  dispatch(removeFromBasket({ id: key }));
                }}
              >
                <Text className="text-[#802a2a] text-sm font-semibold">
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <View className="bg-white px-2 py-2 rounded-tl-2xl rounded-tr-2xl">
        <View className="justify-between flex-row px-4">
          <Text className="font-semibold text-gray-700 text-base">
            Subtotal:
          </Text>
          <Text className="font-semibold text-gray-700 text-base">
            Rs. {total}
          </Text>
        </View>

        <View className="justify-between flex-row px-4">
          <Text className="font-semibold text-gray-700 text-base">
            Delivery Charges:
          </Text>
          <Text className="font-semibold text-gray-700 text-base">
            Rs. {total ? "250" : "0"}
          </Text>
        </View>

        <View className="justify-between flex-row px-4">
          <Text className="font-semibold text-gray-700 text-base">
            Grand Total:
          </Text>
          <Text className="font-semibold text-gray-700 text-base">
            {total ? total + 250 : total}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PreparingOrderScreen");
          }}
          disabled={!total}
          className={`rounded ${
            total ? "bg-green-500" : "bg-gray-500"
          } p-2 mt-2 mx-2 items-center justify-center shadow`}
        >
          <Text className="font-semibold text-white text-base">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
