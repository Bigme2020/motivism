import { EMOTION } from "@/constants/emotion";

export type Emotion = (typeof EMOTION)[keyof typeof EMOTION];
