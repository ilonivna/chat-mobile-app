
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ChatHeaderProps = {
  name: string;
  avatar: string;
};

export default function ChatHeader({ name, avatar }: ChatHeaderProps) {
  const router = useRouter();

const handleAvatarClick = () => {
router.push({
  pathname: "/modalAvatar",
  params: {avatar, name},
})
};

const handleNameClick = () => {
router.push({
  pathname: "/modal",

})
};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAvatarClick}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNameClick}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    color: 'white',
  },
});
