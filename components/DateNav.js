import dayjs from "dayjs";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { appColors } from "../style/colors";

export default function DateNav({date, setDate}) {
  return (
    <View style={styles.dateNavContainer}>
      <Pressable onPress={date => setDate(dayjs(date - 1))}>
        <View style={styles.dateNavButton}>
          {/* <Text>test</Text> */}
        </View>
      </Pressable>

      <View>
        <Text style={{color: appColors.grey100}}>{date}</Text>
      </View>

      <Pressable onPress={date => setDate(dayjs(date + 1))}>
        <View style={styles.dateNavButton}>
          
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  dateNavContainer: {
    height: "15%",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: appColors.primary300,
  },
  dateNavButton: {
    width: "20%",
    backgroundColor: "slategrey"
  }
})