import { Redirect, Tabs } from 'expo-router';
import { View } from 'react-native';
import { useSession } from '@/context/Authentication';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import AuthCheck from '@/components/AuthCheck';

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const { colors } = useTheme()

  if (isLoading) {
    return <AuthCheck />
  }

  if (!session) {
    return <Redirect href="/(auth)/index" />;
  }

  return (
    <Tabs
      backBehavior='none'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.background
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused}) => (
            <View className="items-center justify-center">
              <Ionicons name={focused ? "home-sharp"  : "home-outline"} size={24} color={focused ? color : "gray"} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarBadge: "2",
          tabBarIcon: ({ color, focused}) => (
            <View className="items-center justify-center">
              <Ionicons name={focused ? "person-sharp"  : "person-outline"} size={24} color={focused ? color : "gray"} />
            </View>
          )
        }}
      />
    </Tabs>
  );
}
