import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "../assets/woteva.png";
import banner1 from "../assets/top-view-delicious-groceries-paper-bag - Copy 1.jpg";

export default function Page() {
  return (
    <View>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <View className="">
      <View className="flex flex-col items-center gap-8 ">
        <Image source={banner1} className="object-cover w-full h-[500px] " />

        <View className="px-4 space-y-10">
          <Text
            role="heading"
            className=" text-5xl text-green-950 text-center "
          >
            Spices and Seasoning
          </Text>
          <Text className="text-green-950/50 text-center text-lg py-4">
            Add a burst of flavour to your dishes with our aromatic spices and
            seasonings
          </Text>
          <Link
            href="https://www.woteva.com.uk"
            className="px-6 py-4 w-fit rounded-lg bg-green-950"
          >
            <Text className="text-white text-lg text-center">Explore</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 py-2 bg-green-600 flex items-center flex-row justify-center ">
        <Text className="text-white text-center text-xs ">
          Welcome to Woteva
        </Text>
      </View>
      <View className="px-4 lg:px-6 h-14 bg-green-950 flex items-center flex-row justify-between ">
        <Image source={logo} className="object-contain w-20 h-10" />
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Woteva
        </Text>
      </View>
    </View>
  );
}
