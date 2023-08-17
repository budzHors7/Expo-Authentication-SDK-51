import { Pressable } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { useAuth } from '../../../context/Authentication';

export default function TabTwoScreen() {

  const { signOut } = useAuth()

  return (
    <View className='flex-1 items-center justify-center'>
      <Pressable onPress={() => signOut()}>
        <Text className='text-lg font-bold underline'>Click Here to Logout</Text>
      </Pressable>
    </View>
  );
}
