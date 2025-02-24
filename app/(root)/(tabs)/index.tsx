import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Link href="/sign-in">SignIn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
};

export default index;
