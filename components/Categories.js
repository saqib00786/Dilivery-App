import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient ,{urlFor} from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == 'category']
    `
      )
      .then((data) => setCategories(data));
  }, []);

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
