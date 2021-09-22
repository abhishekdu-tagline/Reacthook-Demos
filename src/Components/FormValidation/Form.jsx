import React, { useState } from "react";
import validate from "./LoginFormValidation";
import useForm from "./useFrom";

export const Form = () => {
  const { handleChange, handleSubmit, fileHandleChange, values, errors } =
    useForm(addUser, validate);
  const [userData, setUserData] = useState([]);

  function addUser() {
    console.log("No errors, submit callback called!");
    setUserData([...userData, values]);
  }

  // console.log("Value is" , values);
  // console.log("UserData is" , userData);
  
  console.log("Ther Error Object  is Contains", errors);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          autoComplete="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
        />{" "}
        <br /> <br />
        {errors.email && <p>{errors.email}</p>}
        <label>PassWord</label>
        <input
          autoComplete="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
        />
        <br /> <br />
        {errors.password && <p>{errors.password}</p>}
        <lable> Phone Number: </lable>
        <input
          type="number"
          name="phone"
          value={values.phone || ""}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.phone && <p>{errors.phone}</p>}
        <label>Profile Picture</label>
        <input
          type="file"
          name="picture"
          onChange={fileHandleChange}
        /> <br /> <br />
        {errors.picture && <p>{errors.picture}</p>}
        <button type="submit">Login</button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
