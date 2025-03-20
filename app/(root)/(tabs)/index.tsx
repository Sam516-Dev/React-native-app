import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="font-bold my-10 font-rubik">Welcome to Sam app</Text>
    </View>
  );
};

export default index;
