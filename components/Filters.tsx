import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants/data";
import index from "@/app/(root)/(tabs)";

const Filters = () => {

const [selected, setSelected] = useState('All');

  return (
  
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((categories, index) => (
          <TouchableOpacity
            key={index}
            className={`flex flex-row items-center py-2 mr-4 px-3  ${selected == categories.title ? "bg-primary-300" : "bg-slate-200"} rounded-full`}
          onPress={() => setSelected(categories.title)}>
            <Text className={` text-black-300 ${selected == categories.title ? "text-white text-lg font-medium" : "text-black-300"}`}>
              {categories.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
   
  );
};

export default Filters;

