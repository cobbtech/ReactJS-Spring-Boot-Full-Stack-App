import React from "react";
import axios from "axios";

const HomeService = () => {
  try {
    return axios.get("http://52.73.27.44:8080/");
  } catch (err) {
    let error = "";
    if (err.response) {
      error += err.response;
    }
    return error;
  }
};

export default HomeService;
