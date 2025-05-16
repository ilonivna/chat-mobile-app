// components/CustomTopTabBar.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Colors from "@/constants/Colors";

export default function CustomTopTabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: Colors.light.background }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={{
              paddingHorizontal: route.name === "Camera" ? 12 : 20,
              paddingVertical: 12,
              alignItems: "center",
            }}
          >
            {route.name === "Camera" ? (
              <Feather
                name="camera"
                size={24}
                color={isFocused ? "#d703fc" : Colors.light.tint}
              />
            ) : (
              <Text
                style={{
                  fontWeight: "bold",
                  color: isFocused ? "#d703fc" : Colors.light.tint,
                }}
              >
                {options.title ?? route.name}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
