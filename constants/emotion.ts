import { Emotion } from "@/types/emotion";

export const EMOTION = {
  /** 开心 */
  TEMP_HAPPY: 1,
  /** 兴奋 */
  EXCITING: 2,
  /** 眩晕 */
  DIZZY: 3,
  /** emo */
  EMO: 4,
  /** 瞌睡 */
  SLEEPY: 5,
  /** 幸福 */
  NOBLE_HAPPY: 6,
} as const;
export const EMOTION_NAME: Record<Emotion, { normal: string }> = {
  [EMOTION.TEMP_HAPPY]: {
    normal: "开心",
  },
  [EMOTION.EXCITING]: { normal: "兴奋" },
  [EMOTION.DIZZY]: { normal: "眩晕" },
  [EMOTION.EMO]: { normal: "emo" },
  [EMOTION.SLEEPY]: { normal: "瞌睡" },
  [EMOTION.NOBLE_HAPPY]: { normal: "幸福" },
};
