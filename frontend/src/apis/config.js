const baseUrl = process.env.REACT_APP_API_URL;

export const restaurantIndex = `${baseUrl}/restaurants`;
export const foodsIndex = (restaurantId) =>
  `${baseUrl}/restaurants/${restaurantId}/foods`;
export const lineFoods = `${baseUrl}/line_foods`;
export const lineFoodsReplace = `${baseUrl}/line_foods/replace`;
export const orders = `${baseUrl}/orders`;
