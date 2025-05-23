import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import ChatHeader from "@/components/ChatHeader";
import HeaderActions from "@/components/HeaderActions";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/types"; 

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "" }}
        />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
<Stack.Screen
  name="modalAvatar"
  options={({ route }) => {
    const { name } = route.params as { name: string };
    return {
      headerTitle: () => (
        <Text style={{ color: "white" }}>Photo of {name}</Text>
      ),
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerTintColor: "white",
      presentation: "modal",
    };
  }}
/>

<Stack.Screen
  name="chatroom/[id]"
  options={({ route }) => {
    const { name, avatar } = route.params as {
      name: string;
      avatar: string;
    };
    return {
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerTitleAlign: "left",
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 18,
      },
      headerTitle: () => <ChatHeader name={name} avatar={avatar} />,
      headerRight: () => <HeaderActions />,
    };
  }}
/>

        <Stack.Screen name="+not-found" options={{ title: "Oops!" }} />
      </Stack>
    </ThemeProvider>
  );
}
