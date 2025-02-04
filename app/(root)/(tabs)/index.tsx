import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text className=" text-red-700 shadow-slate-900 drop-shadow-md  text-center py-8 bg-blue-300 font-rubik-bold text-3xl">
        This is my heading test !
      </Text>
      <Link href="/sign-in">SignIn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
};

export default index;
