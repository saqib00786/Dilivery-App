import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import BasketScreen from "../screens/BasketScreen";
import PreparingOrderScreen from "../screens/PreparingOrderScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="BasketScreen"
            component={BasketScreen}
            options={{
              headerShown: false,
              presentation: "containedTransparentModal",
            }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
