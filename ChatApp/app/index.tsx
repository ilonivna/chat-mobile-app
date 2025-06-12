import { Text, View } from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

export default function HomeScreen() {
  const { user, signOut } = useAuthenticator();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Hey Welcome {user?.username}!</Text>
      <Text style={{ color: 'blue', marginTop: 20 }} onPress={signOut}>
        Sign Out
      </Text>
    </View>
  );
}
