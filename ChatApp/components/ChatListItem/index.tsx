import { ChatRoom } from "@/types";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];
return (
    <View>
        <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
        <Text>{chatRoom.lastMessage.content}</Text>
    </View>
)
};

export default ChatListItem;