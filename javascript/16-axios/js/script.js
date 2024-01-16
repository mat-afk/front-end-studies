// Axios
console.log(axios);

// Requests
const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getUsers();
