import React, { useEffect } from "react";
import fetchRestaurants from "../../apis/restaurants";

const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants().then((data) => console.log(data));
    return;
  }, []);

  return <>レストラン一覧</>;
};

export default Restaurants;
