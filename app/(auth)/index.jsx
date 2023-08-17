import { Pressable } from "react-native";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../context/Authentication";

export default function Authentication() {

    const { signIn } = useAuth()

    return (
        <View className="h-full justify-center items-center space-y-5">
            <Text className="text-2xl font-extrabold">Authenticate</Text>

            <Pressable onPress={() => signIn()}>
                <Text className="underline">Click Here to Authenticate</Text>
            </Pressable>
        </View>
    )
}