import { Stack, useLocalSearchParams } from "expo-router";
import React, { FC, useMemo } from "react";

import { EMOTION_NAME } from "@/constants/emotion";
import { Emotion } from "@/types/emotion";

const EmotionPage: FC = () => {
  const { emotionEnum } = useLocalSearchParams();
  const title = useMemo(
    () => EMOTION_NAME[Number(emotionEnum) as Emotion].normal,
    [emotionEnum]
  );

  return (
    <>
      <Stack.Screen
        options={{
          title,
        }}
      />
    </>
  );
};

export default EmotionPage;
