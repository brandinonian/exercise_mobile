import { View } from "react-native";
import DateNav from "../components/DateNav";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { get_exercises } from "../data/server";
import ExerciseList from "../components/ExerciseList";

export default function HomeScreen() {

  const [date, setDate] = useState();
  const [exercises, setExercises] = useState();
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    setDate(dayjs());
    try {
      data = get_exercises(date);
      setExercises(data);
    }
    catch (error) {
      setHasFetchError(true);
    }
  }, [])

  return (
    <View>
      <DateNav date={date} setDate={setDate} />
      {
        hasFetchError && exercises ?
          <ExerciseList exercises={exercises} />
          : <View><Text>No Exercsises found...</Text></View>
      }
    </View>
  )
}