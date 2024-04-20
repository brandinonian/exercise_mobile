import { FlatList, StyleSheet, Text, View } from "react-native";
import { appColors } from "../style/colors";

function ExerciseItem({ name, date, weight, reps, time }) {
  return (
    <View>
      <View>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.headerText}>{date}</Text>
      </View>
      <View>
        {weight && <Text style={styles.detailText}>Weight: {weight} lbs</Text>}
        {reps && <Text style={styles.detailText}>Reps: {reps}</Text>}
        {time && <Text style={styles.detailText}>Time: {time} sec</Text>}
      </View>

    </View>
  );
}

export default function ExerciseList({ exercises }) {
  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={item => (
          <ExerciseItem
            name={item.name}
            date={item.date}
            weight={item.weight}
            reps={item.reps}
            time={item.time}
          />
        )}
        ItemSeparatorComponent={<View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: "black",
  },
  headerText: {
    color: appColors.grey100,
    fontSize: 20,
  },
  detailText: {
    color: appColors.grey100,
    fontSize: 16,
  }
});