import { Platform } from "react-native";

// подстройка под клавиатуру и bottom bars
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 0;
