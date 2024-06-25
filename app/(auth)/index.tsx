import { useSession } from "@/context/Authentication";
import { Pressable, Text, View } from "react-native";

export default function Authentication() {

    const { signIn } = useSession()

    return (
        <View className="h-full justify-center items-center relative">
            <Text className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">Welcome</Text>

            <Pressable className="absolute bottom-10 bg-[#2e78b7] p-4 rounded-full active:scale-90" onPress={() => signIn()}>
                <Text className="text-white font-extrabold">Continue</Text>
            </Pressable>
        </View>
    )
}