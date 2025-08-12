import Home from "@/screens/Home";
import { colors } from "@/utils/colors";
import {
  Platform,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast, { ToastConfigParams } from "react-native-toast-message";

const STATUSBAR_HEIGHT =
  Platform.OS === "android" ? RNStatusBar.currentHeight || 24 : 0;

const toastConfig = {
  success: (props: ToastConfigParams<any>) => {
    const { text1, text2 } = props;
    return (
      <View
        style={{
          maxWidth: 450,
          height: 60,
          backgroundColor: "#0ba10b",
          paddingHorizontal: 15,
          justifyContent: "center"
        }}
      >
        {text1 ? (
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            {text1}
          </Text>
        ) : null}
        {text2 ? <Text style={{ color: "white" }}>{text2}</Text> : null}
      </View>
    );
  },
  error: (props: ToastConfigParams<any>) => {
    const { text1, text2 } = props;
    return (
      <View
        style={{
          maxWidth: 300,
          height: 60,
          backgroundColor: "#e75252",
          paddingHorizontal: 15,
          justifyContent: "center"
        }}
      >
        {text1 ? (
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            {text1}
          </Text>
        ) : null}
        {text2 ? <Text style={{ color: "white" }}>{text2}</Text> : null}
      </View>
    );
  }
};

export default function App() {
  return (
    <>
      <View style={style.statusBar} />
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
        <Toast config={toastConfig} />
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: colors.backgroundPrimary
  }
});
