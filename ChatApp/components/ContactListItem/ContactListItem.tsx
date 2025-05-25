import { ChatRoom } from "@/types";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";



export type ContactListItemProps = {
  chatRoom: ChatRoom;
};

const ContactListItem = (props: ContactListItemProps) => {
  const router = useRouter();
  const { chatRoom } = props;
  const handleClick = () => {
    router.push({
      pathname: "/chatroom/[id]",
      params: { id: chatRoom.id, 
        name: chatRoom.users[1].name,
      avatar: chatRoom.users[1].imageUri, },
    });
  };

  const user = chatRoom.users[1];
  return (
    <Pressable onPress={handleClick}>
      <View style={styles.container}>

          <Image source={{ uri: user.imageUri }} style={styles.avatar} />


            <Text style={styles.name}>{user.name}</Text>



      </View>
    </Pressable>
  );
};

export default ContactListItem;
