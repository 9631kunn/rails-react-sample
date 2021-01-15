import axios from "axios";
import { restaurantsIndex } from "./config";

const fetchRestaurants = async () => {
  return await axios
    .get(restaurantsIndex)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
};

export default fetchRestaurants;
