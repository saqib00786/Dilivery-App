import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  let chienese =
    "https://thumbs.dreamstime.com/z/hong-kong-honey-glazed-barbecue-roasted-pork-hannging-cantonese-chinese-restaurant-hong-kong-honey-glazed-barbecue-roasted-pork-169013959.jpg";
  let pakistani = "https://thumbs.dreamstime.com/z/kabab-21895781.jpg";
  let thai = "https://thumbs.dreamstime.com/z/thai-food-417761.jpg";
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imageUrl={chienese} title="Chienese" />
      <CategoryCard imageUrl={pakistani} title="Pakistani" />
      <CategoryCard imageUrl={thai} title="Thai" />
      <CategoryCard imageUrl={chienese} title="Chienese" />
      <CategoryCard imageUrl={pakistani} title="Pakistani" />
      <CategoryCard imageUrl={thai} title="Thai" />
      <CategoryCard imageUrl={chienese} title="Chienese" />
      <CategoryCard imageUrl={pakistani} title="Pakistani" />
      <CategoryCard imageUrl={thai} title="Thai" />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
