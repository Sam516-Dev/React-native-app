import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";

const signin = () => {
  const handleLogin = () => {
    alert("Login");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 object-contain "
        />

        <View>
          <Text className="text-black-200 text-lg text-center mt-8 font-rubik uppercase">
            Welcome to Restate
          </Text>

          <Text className="text-center text-3xl font-rubik-bold text-black-300 mt-4">
            Let's get you CLoser to {"\n"}
            <Text className="text-primary-300">your dream home</Text>
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white w-5/6 py-4 rounded-lg border shadow-md shadow-zinc-500 border-primary-300 mt-8 mx-auto"
          >
            <View className="flex flex-row items-center justify-center gap-4" >
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-black-300 text-lg flex text-center">
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
