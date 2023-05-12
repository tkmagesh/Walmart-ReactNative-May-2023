

export const fetchWeather = async city => {
  const response = await fetch(
    `http://localhost:3000/city/${city}/`,
  );
  const result = await response.json();
  console.log(result)
  return result;
};
