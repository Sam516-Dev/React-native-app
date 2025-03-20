import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
const index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className=" px-5">
        <View className="flex flex-row items-center mt-5 justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image source={images.sampic} className="size-12 rounded-full" />
            <View className="flex flex-col">
              <Text className="text-black-300">Good Morning</Text>
              <Text className="text-lg font-rubik-bold">Samuel </Text>
            </View>
          </View>

          <Image source={icons.bell} className="size-6" />
        </View>
        <Search />
        <View className="my-5">
          <View className="justify-between flex flex-row items-center">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className=" text-primary-300 font-rubik-bold ">
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
