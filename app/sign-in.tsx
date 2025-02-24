import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";

const signin = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 object-contain "
        />

        <View>
          <Text className="text-2xl font-bold text-center mt-8">
            Welcome to Samuel
          </Text>
          <Text className="text-center mt-4">
            Sign in to continue to Samuel
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
