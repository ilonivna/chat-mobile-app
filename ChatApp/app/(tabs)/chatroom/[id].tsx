import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function ChatRoomScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <Text style={{color: 'white'}}>Chat Room ID:</Text>
  );
}
