import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle: string;
  showArrow?: boolean;
}

const handleLogout = () => {
  // handle logout
}

const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-5 0"
  >
    <View className="flex flex-row gap-1 items-center">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-medium text-black-300 ${textStyle}`}>
        {" "}
        {title}{" "}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row justify-between items-center py-5 mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View>
          <View className="flex flex-col items-center mt-5 relative">
            <Image source={images.sampic} className="size-44 rounded-full" />
            <TouchableOpacity className="absolute right-24 bottom-11 rounded-full p-2 bg-white">
              <Image source={icons.edit} className="size-9 " />
            </TouchableOpacity>

            <Text className="text-lg font-rubik-bold mt-2">Samuel Njoroge</Text>
          </View>
        </View>
        <View className="mt-10 flex flex-col">
          <SettingItem
            icon={icons.calendar}
            title="My bookings"
            textStyle="text-lg font-rubik-medium"
          />
          <SettingItem
            icon={icons.wallet}
            title="My information"
            textStyle="text-lg font-rubik-medium"
          />
          <View className="flex flex-col mt-5 border-t pt-5 border-gray-200">
            {settings.slice(2).map((setting, index) => (
              <SettingItem
                key={index}
                icon={setting.icon}
                title={setting.title}
                textStyle="text-lg font-rubik-medium"
              />
            ))}
          </View>
          <View className="flex flex-col mt-5 border-t pt-5 border-gray-200">
            <SettingItem
              icon={icons.logout}
              title="Logout"
              textStyle="text-lg font-rubik-medium text-red-500"
              showArrow={false}
              onPress={() => {handleLogout()}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
