import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import chatsScreen from "./chatsScreen";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import Camera from "./camera";
import Colors from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import { MainTabParamList } from "../../types";


const TopTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function TabsWrapper() {
  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIndicatorStyle: { backgroundColor: "#d703fc" },
        tabBarStyle: { backgroundColor: Colors.light.background },
        tabBarActiveTintColor: "#d703fc",
        tabBarInactiveTintColor: Colors.light.tint,

      }}
    >
      <TopTab.Screen
        name="Camera"
        component={Camera}
        options={{

          tabBarLabel: ({ focused }) => (
            <Feather
              name="camera"
              size={24}
              color={focused ? "#d703fc" : Colors.light.tint}
            />
          ),

        }}
      />
      <TopTab.Screen
        name="Chats"
        component={chatsScreen}
        options={{ title: "Chats" }}
      />
      <TopTab.Screen
        name="Status"
        component={TabTwo}
        options={{ title: "Status" }}
      />
      <TopTab.Screen
        name="Calls"
        component={TabThree}
        options={{ title: "Calls" }}
      />
    </TopTab.Navigator>
  );
}
