const { REACT_APP_BASE_API, REACT_APP_API_KEY, REACT_APP_API_HASH } =
  process.env;

export const getCharacters = async () => {
  const response = await fetch(
    REACT_APP_BASE_API +
      `&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}&limit=100`,
    {
      data: { limit: 100 },
    }
  );
  return response.json();
  //.then((res) => res.json());
  // .then((data) => console.log(data))
  // .catch((err) => {
  //   console.log("Error Reading data " + err);
  // });
};
