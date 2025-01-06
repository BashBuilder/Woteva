import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "../assets/woteva.png";
import banner1 from "../assets/top-view-delicious-groceries-paper-bag - Copy 1.jpg";
import banner3 from "../assets/frozen-food-table-arrangement.jpg";
import banner4 from "../assets/skin care.jpg";
import banner5 from "../assets/spicy-mango-salsa-featured-image.jpg";
import banner6 from "../assets/household.jpg";

const carouselData = [
  {
    title: "Spices and Seasoning",
    description:
      " Add a burst of flavour to your dishes with our aromatic spices and seasonings",
    image: banner1,
    button: "Explore",
  },
  {
    title: "Taste the convenience",
    description: "Shop your favourite food online",
    image: banner3,
    button: "Explore",
  },
  {
    title: "Taste the convenience",
    description: "Shop your favourite food online",
    image: banner4,
    button: "Explore",
  },
  {
    title: "Taste the convenience",
    description: "Shop your favourite food online",
    image: banner5,
    button: "Explore",
  },
  {
    title: "Taste the convenience",
    description: "Shop your favourite food online",
    image: banner6,
    button: "Explore",
  },
];

export default function Page() {
  return (
    <View>
      <Header />
      <Content />
    </View>
  );
}

function Content() {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (currentItem > carouselData.length) {
    setCurrentItem(0);
  }

  return (
    <ScrollView>
      <Carousel
        title={carouselData[currentItem].title}
        description={carouselData[currentItem].description}
        image={carouselData[currentItem].image}
        buttonText={carouselData[currentItem].button}
      />
    </ScrollView>
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

function Carousel({ title, image, description, buttonText }) {
  return (
    <View className="flex flex-col items-center gap-8 ">
      <Image source={image} className="object-cover w-full h-[400px] " />

      <View className="px-4 space-y-10">
        <Text role="heading" className=" text-5xl text-green-950 text-center ">
          {title}
        </Text>
        <Text className="text-green-950/50 text-center text-lg py-4">
          {description}
        </Text>
        <Link
          href="https://woteva.co.uk/"
          className="px-6 py-4 w-fit rounded-lg bg-green-950"
        >
          <Text className="text-white text-lg text-center">{buttonText}</Text>
        </Link>
      </View>
    </View>
  );
}
