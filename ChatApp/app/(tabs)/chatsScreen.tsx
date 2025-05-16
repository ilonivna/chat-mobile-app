import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import ChatListItem from '@/components/ChatListItem';
import chatRooms from "../../data/ChatRooms";

export default function ChatsScreen() {


  return (
    <View style={styles.container}>
    
      <ChatListItem chatRoom={chatRooms[0]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
