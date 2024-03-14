import { ActivityIndicator, View } from "react-native";

function Loading() {
    return (
        <View>
            <ActivityIndicator  size={"large"} style={{margin:30}}/>
        </View>
    )
}
export default Loading;