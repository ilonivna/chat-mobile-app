import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HeaderActions() {
  return (
    <View style={{ flexDirection: 'row', gap: 16, marginRight: 8 }}>
      <FontAwesome name="video-camera" size={20} color="white" />
      <FontAwesome name="phone" size={20} color="white" />
      <FontAwesome name="ellipsis-v" size={20} color="white" />
    </View>
  );
}