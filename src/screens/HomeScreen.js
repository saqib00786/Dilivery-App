import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../../components/HomeHeader";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import sanityClient from "../../sanity.js";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
        ...,
        restaurants->{
          ...,
          dishes->
        }
      }`
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <View className="bg-gray flex-1 mb-4">
      <HomeHeader />
      <ScrollView>
        {/* Categories */}
        <Categories />

        {featuredCategories.map((category) => {
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              text={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
