import { StyleSheet, Text, View } from "react-native";
import DateNav from "../components/DateNav";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { get_exercises } from "../data/helpers";
import ExerciseList from "../components/ExerciseList";
import { appColors } from "../style/colors";

export default function HomeScreen() {

  const [date, setDate] = useState(dayjs().format("MMDDYYYY"));
  const [exercises, setExercises] = useState();
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    try {
      console.log("useEffect date " + date);
      data = get_exercises(date);
      setExercises(data);
    }
    catch (error) {
      setHasFetchError(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={{height: "10%"}}></View>
      <DateNav date={date} setDate={setDate} />
      {
        (!hasFetchError && exercises) ?
          <ExerciseList exercises={exercises} />
          : <View><Text style={{color: appColors.grey100}}>No Exercsises found...</Text></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary500,
    height: "100%",
    width: "100%",
    alignItems: "center",
  }
});