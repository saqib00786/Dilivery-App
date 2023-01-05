import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../features/RestaurantSlice";
import MapView,{Marker} from "react-native-maps"

const DeliveryScreen = () => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <View className="w-full h-1/4 items-center justify-center pt-6 shadow-lg">
        <View className="flex-row justify-between w-10/12 rounded-md my-4 mt">
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <XCircleIcon size={40} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">Order Help</Text>
        </View>
        <View className="w-10/12 h-2/3 bg-white rounded-md -mb-24">
          <View className="flex-row justify-between mx-4 mt-4">
            <View>
              <Text className="text-slate-700 text-sm">
                Estimated Arrival Time
              </Text>
              <Text className="text-slate-700 text-3xl font-bold">
                30-35 min
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/dashboard.jpg")}
                className="w-16 h-16 rounded-full"
              />
            </View>
          </View>
          <Text className="mx-4 text-slate-600 text-xs">
            Your Order is Prepared at {restaurant.title}
          </Text>
        </View>
      </View>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="w-full h-3/4 -z-50"
        mapType="standard"
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          pinColor="#00ccbb"
        />
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
