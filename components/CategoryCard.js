import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 items-center">
      <Image
        source={{uri  : imageUrl }}
        className="w-20 h-20 rounded object-contain"
      />
      <Text
      className='text-white font-semibold absolute bottom-1'
      >{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
