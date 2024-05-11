import axios from "axios";

const UserEmailDataService = async (email) => {
  try {
    return axios.post(`http://52.73.27.44:8080/notification`, null, {
      params: {
        email,
      },
    });
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default UserEmailDataService;
