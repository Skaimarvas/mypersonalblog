import React from "react";
import { data } from "../mock/data";
import { useState } from "react";
import axios from "axios";

export default function useAxios() {
  const [responseData, setResponseData] = useState();
  const [err, setError] = useState();

  const getRequest = () => {
    return axios
      .post("https://reqres.in/api/workintech", data)
      .then((res) => {
        setResponseData(res.data);
      })
      .catch((err) => console.log("RESERROR", err));
  };

  return [data, getRequest];
}
