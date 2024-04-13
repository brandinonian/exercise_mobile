import { FlatList, StyleSheet, View } from "react-native";

function ExerciseItem({name, date, weight, reps, time}) {
  return (
    <View>

    </View>
  );
}

export default function ExerciseList({ exercises }) {
  return (
    <View>
      <FlatList
        data={exercises}
        renderItem={item => <ExerciseItem />}
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
});