import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../../components/HomeHeader";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className='bg-gray'>
      <HomeHeader />
      <ScrollView>
        {/* Categories */}
        <Categories />
        <FeaturedRow
          id={1}
          text="Featured Foods"
          description="Discover the best foods from around the world"
        />
        <FeaturedRow
          id={1}
          text="Tasty Discounts"
          description="Everyday discounts on your favorite foods"
        />
        <FeaturedRow
          id={1}
          text="Offers Near You"
          description="Find the best offers near you"
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
