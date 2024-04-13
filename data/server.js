import axios from "axios";
import dayjs from "dayjs";

const host = process.env.HOST;
const port = process.env.PORT;


// format on the date is going to be important here
// needs to be url friendly but still useful as a mongo index
export const get_exercises = (date) => {
  axios.get(host + port + "/exercises/" + date)
    .then(response => response.json())
    .then(json => {
      return json.exercises;
    })
    .catch(error => console.log(error));
}

export const post_exercise = (exercise) => {
  axios.post((host + port + "/exercises"), {
    name: exercise.name,
    date: dayjs(),
    weight: exercise.weight,
    reps: exercise.reps,
    time: exercise.time
  })
    .then(response => response)
    .catch(error => console.log(error));
}

export const delete_exercise = (id) => {
  axios.delete((host + port + "/exercises"), { id: id })
    .then(response => response)
    .catch(error => console.log(error));
}