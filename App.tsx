import React, { useState, useEffect } from "react";
import { Text, Image, View } from "react-native";
import Axios from "axios";
import api from "./api";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { getGoldenCross, getRise, getSearch, getKOS } from "./redux/stockSlice";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import Navigator from "./navigation/NavController";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isSplashReady, setIsSplashReady] = useState(false);
  const handleFinish = () => setIsSplashReady(true);
  const loadAssets = async () => {
    try {
      const images = [require("./assets/icon.png"), require("./assets/splash.png")];
      const fonts = [Ionicons.font];
      const imagePromises = cacheImages(images);
      const fontPromises = cacheFonts(fonts);
    } catch (e) {
      console.error();
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    loadAssets();
  }, []);
  if (!isSplashReady)
    return <AppLoading onError={console.error} startAsync={loadAssets} onFinish={handleFinish} />;
  if (!isReady)
    return (
      <View style={{ flex: 1 }}>
        <Image source={require("./assets/splash.png")} />
      </View>
    );

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
