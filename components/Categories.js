import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient ,{urlFor} from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  console.log(
    "🚀 ~ file: Categories.js:8 ~ Categories ~ categories",
    categories
  );

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'category']
    `
      )
      .then((data) => setCategories(data));
  }, []);

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
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category._id}
            imageUrl={urlFor(category.image).url()}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
