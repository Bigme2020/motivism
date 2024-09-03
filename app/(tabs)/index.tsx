import { useMemo } from "react";
import { ScrollView, Text, Button, Pressable, View } from "react-native";
import { getDocumentAsync } from "expo-document-picker";
import { Link } from "expo-router";
import { Audio } from "expo-av";

import { EMOTION, EMOTION_NAME } from "@/constants/emotion";

export default function Home() {
  const emotions = useMemo(
    () =>
      Object.values(EMOTION).map((emotion) => ({
        label: EMOTION_NAME[emotion].normal,
        emotion,
      })),
    []
  );

  const onPress = async () => {
    const { assets, canceled } = await getDocumentAsync();

    if (!canceled) {
      const { mimeType, uri } = assets[0];
      if (mimeType && mimeType.split("/")[0] === "audio") {
        const { sound } = await Audio.Sound.createAsync({ uri });
        try {
          const { isLoaded } = await sound.playAsync();
          if (isLoaded) {
            console.log("loaded!!!");
          }
        } catch (error) {
          console.log(String(error));
        }
      }
    }
  };

  return (
    <View className="w-full h-full flex flex-col items-center bg-[#fffceb]">
      <Text className="mt-24 text-4xl">Emotivism</Text>
      <View className="w-full flex-1 flex flex-row justify-end items-center p-9">
        <View className="flex flex-col">
          <Button onPress={onPress} title="Record" />
          <Button onPress={onPress} title="Record" />
        </View>
        <View className="flex flex-col">
          <Button onPress={onPress} title="Record" />
          <Button onPress={onPress} title="Record" />
          <Button onPress={onPress} title="Record" />
          <Button onPress={onPress} title="Record" />
          <Button onPress={onPress} title="Record" />
        </View>
      </View>
      {/* {emotions.map(({ label, emotion }, index) => (
        <Link
          className="relative w-full h-[200] rounded-s-sm mb-2 bg-slate-500 rounded-lg"
          href={`/emotion/${emotion}`}
          key={index}
          asChild
        >
          <Pressable>
            <Text className="absolute left-1 bottom-1 text-white">{label}</Text>
          </Pressable>
        </Link>
      ))} */}
    </View>
  );
}
