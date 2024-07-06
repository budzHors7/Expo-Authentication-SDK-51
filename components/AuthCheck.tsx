import { ActivityIndicator, View } from "react-native";

export default function AuthCheck() {
    return (
        <View className="flex-1 bg-white dark:bg-black h-full justify-center items-center">
            <ActivityIndicator size={'large'} color={'#2e78b7'} />
        </View>
    )
}