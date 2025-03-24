import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard } from "@/components/cards";
import { Card } from "@/components/cards";
import Filters from "@/components/Filters";

const index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={(item) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-28"
        columnWrapperClassName="flex gap-5 px-5 my-2"
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View className=" px-5">
            <View className="flex flex-row items-center mt-5 justify-between">
              <View className="flex flex-row items-center gap-2">
                <Image
                  source={images.sampic}
                  className="size-12 rounded-full"
                />
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
              <FlatList 
                data={[1, 2, 3, 4]}
                renderItem={(item) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>
            <View className="justify-between mb-5 flex flex-row items-center">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className=" text-primary-300 font-rubik-bold ">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default index;
