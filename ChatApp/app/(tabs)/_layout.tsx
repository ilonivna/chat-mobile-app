import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";
import { View, Pressable, Text } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";


const Stack = withLayoutContext(createStackNavigator().Navigator);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitle: "ChatApp",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Link href="/modal" asChild>
              <Pressable>
                {() => (
                  <EvilIcons
                    name="search"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                  />
                )}
              </Pressable>
            </Link>

            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          </View>
        ),
      }}
    />
  );
}
