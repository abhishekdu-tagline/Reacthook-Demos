import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import DisplayUsers from "./DisplayUsers";

export const UserForm = () => {
  /// Declare State for handling Form Data
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
  });
  const [userInfo, setUserInfo] = useState([]);

   useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        //   console.log("Response is Displayed", response);
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetail({ ...userDetail, [name]: value, id: Math.random() + 1 });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/users", userDetail)
      .then((res) => {
        // console.log("Response is ", res.data);
        setUserInfo([...userInfo, res.data]);
        setUserDetail({ name: "", email: "" });
      })
      .catch((err) => {
        console.log("Error is ", err);
      });
  };

  //   console.log("User Form Object is now " + JSON.stringify(userDetail));
  //   console.log("User Form Data Array is now " + JSON.stringify(userInfo));
  return (
    <>
      <from>
        <input
          type="text"
          name="name"
          value={userDetail.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="email"
          value={userDetail.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button onClick={handleSubmit}>Add User</button>
      </from>

      <DisplayUsers userValues={userInfo} />
    </>
  );
};
