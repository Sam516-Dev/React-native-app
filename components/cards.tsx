import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

interface props {
  onPress: () => void;
}

export const FeaturedCard = () => {
  return (
    <TouchableOpacity className="flex flex-col items-start h-80 w-60 relative">
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0 " />
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>card 2</Text>
    </View>
  );
};
