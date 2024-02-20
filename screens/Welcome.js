import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/cow.png")}
            style={{
              height: 300,
              width: 300,
              // borderRadius: 20,
              // position: "absolute",
              top: 30,
              left: 10,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: "-15deg" },
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Cattle Expert
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            System
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              Diagnose your cattle with the help of Machine Learning
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              And get possible treatment options.
            </Text>
          </View>

          <Button
            title="Get Started"
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />

          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Already have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View> */}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
