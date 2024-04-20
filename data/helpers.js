import axios from "axios";
import dayjs from "dayjs";

const host = process.env.HOST;
const port = process.env.PORT;
const baseURL = 'http://' + host + port;


// format on the date is going to be important here
// needs to be url friendly but still useful as a mongo index
export const get_exercises = (date) => {
  console.log("fetching " + date)
  axios.get(baseURL + "/exercises/" + date)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })
    .catch(error => console.log(error));
}

export const post_exercise = (exercise) => {
  axios.post((baseURL + "/exercises"), {
    name: exercise.name,
    date: dayjs().format('MMDDYYYY'),
    weight: exercise.weight,
    reps: exercise.reps,
    time: exercise.time
  })
    .then(response => response)
    .catch(error => console.log(error));
}

export const delete_exercise = (id) => {
  axios.delete((baseURL + "/exercises"), { id: id })
    .then(response => response)
    .catch(error => console.log(error));
}