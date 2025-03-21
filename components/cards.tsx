import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface props {
  onPress: () => void;
}

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className="flex flex-col items-start h-80 w-60 relative">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0 "
      />
      <View className="absolute right-3 flex flex-row items-center gap-1 top-4 py-2 px-3 bg-white rounded-full">
        <Image source={icons.star} className="size-4" />
        <Text className=" font-rubik-bold"> 4.8 </Text>
      </View>
      <View className="absolute bottom-16 left-5">
        <Text className="text-white text-2xl font-bold">Japan Town</Text>
        <Text className="text-white text-xl"> House to rent </Text>
      </View>
      <View className="absolute bottom-5 flex flex-row items-center justify-between w-full px-5">
        <Text className="text-white text-3xl font-bold">$300</Text>
        <Image source={icons.heart} className="size-5" />
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View className="my-5">
      <View className="justify-between flex flex-row items-center">
        <Text className="text-black-300 text-xl font-rubik-bold">
          Our Recommendation
        </Text>
        <TouchableOpacity>
          <Text className=" text-primary-300 font-rubik-bold ">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row gap-5 mt-5"
      >
        <TouchableOpacity className=" py-3 bg-primary-300 text-white rounded-full px-8">
          <Text className="text-white">All</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" py-3 bg-gray-200 text-black-300 rounded-full px-8">
          <Text className="text-black-300">House</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" py-3 bg-gray-200 text-black-300 rounded-full px-8">
          <Text className="text-black-300">Apartment</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" py-3 bg-gray-200 text-black-300 rounded-full px-8">
          <Text className="text-black-300">Others</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" py-3 bg-gray-200 text-black-300 rounded-full px-8">
          <Text className="text-black-300">test</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        className="flex mt-5 flex-col items-start h-52 w-40 bg-white rounded-2xl relative"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <Image source={images.japan} className="h-24 w-full rounded-2xl" />

        <View className="absolute right-3 top-4 flex flex-row items-center gap-1 py-2 px-2 bg-white rounded-full">
          <Image source={icons.star} className="size-4" />
          <Text className="font-rubik-semibold">3.2</Text>
        </View>

        <View className="absolute bottom-12 left-3">
          <Text className="text-gray-800 text-xl font-bold">Nairobi</Text>
          <Text className="text-gray-400 text-lg">House to sell</Text>
        </View>

        <View className="absolute bottom-5 left-3 right-3 flex flex-row items-center justify-between">
          <Text className="text-primary-300 text-2xl font-bold">$400</Text>
          <Image source={icons.heart} className="size-4 bg-gray-400 rounded-xl" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
