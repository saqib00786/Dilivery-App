import { View, Text, ActivityIndicator, Dimensions } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  setTimeout(() => {
    navigation.navigate("DeliveryScreen");
  }, 2500);

  return (
    <View className=" flex-1 bg-white items-center justify-center ">
      <Animatable.Image
        source={require("../../assets/deliveryAnim.gif")}
        className="h-96 w-96 self-center"
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text animation={"slideInUp"}>
        <Text className="text-lg font-bold text-green-600">
          Waiting for restaurant to accept your order
        </Text>
      </Animatable.Text>
    </View>
  );
};

export default PreparingOrderScreen;
