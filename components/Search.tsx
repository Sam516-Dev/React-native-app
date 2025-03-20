import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../constants/icons";

const search = () => {
  return (
    <View className="py-1 mt-5 px-4 w-full flex flex-row justify-between items-center rounded-full border border-gray-300 bg-accent-100">
      <View className="flex flex-1 flex-row items-center">
        <Image source={icons.search} className="size-5" />
        <TextInput
          placeholder="Search for anything"
          className="text-sm font-rubik ml-2 flex-1 w-11/12 mt-2 text-black-300"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default search;
