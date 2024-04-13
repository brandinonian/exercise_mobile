import dayjs from "dayjs";
import { Pressable, StyleSheet, View } from "react-native";

export default function DateNav({date, setDate}) {
  return (
    <View style={styles.dateNavContainer}>
      <Pressable onPress={date => setDate(dayjs(date - 1))}>
        <View style={styles.dateNavButton}>
          
        </View>
      </Pressable>

      <View>
        <Text>{date}</Text>
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
    height: "20%",
    width: "100%"
  },
  dateNavButton: {
    width: "20%",
  }
})