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
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

import { Amplify } from 'aws-amplify';
import { getUser } from '../src/graphql/queries'; 
import { createUser } from "@/src/graphql/mutations";
import { fetchAuthSession, getCurrentUser } from "@aws-amplify/auth";
import { get, post } from "@aws-amplify/api";
import awsconfig from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react-native";


const GRAPHQL_ENDPOINT = awsconfig.aws_appsync_graphqlEndpoint;
const REGION = awsconfig.aws_appsync_region;
const API_KEY = awsconfig.aws_appsync_apiKey;
Amplify.configure(awsconfig);

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  //run this snippet only when app is mounted
  useEffect(() => {
    const fetchUser = async () => {
      // get authenticated user from Auth
      const userInfo = await getCurrentUser();
      console.log("User:", userInfo);

      // get user from backend with the user Id from Auth
      const userId = userInfo?.signInDetails?.loginId;

      if (!userId) {
        console.warn("User ID not found");
        return;
      }
      // if there is no user with such Id in DB - then create one
    };
    fetchUser();
  }, []);

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

  return (
    <Authenticator.Provider>
      <Authenticator>
        <RootLayoutNav />
      </Authenticator>
    </Authenticator.Provider>
  );
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
        <Stack.Screen name="contacts" options={{ title: "Contacts" }} />

        <Stack.Screen name="+not-found" options={{ title: "Oops!" }} />
      </Stack>
    </ThemeProvider>
  );
}
