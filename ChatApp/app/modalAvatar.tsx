// app/modal.tsx
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ModalScreen() {
const {avatar} = useLocalSearchParams();
const router = useRouter();

return (
    <TouchableOpacity style={styles.overlay} onPress={()=>{router.back()}}>
        <Image style={styles.avatar} source={{ uri: avatar as string }}></Image>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
});
