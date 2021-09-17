import React from "react";
import validate from "./LoginFormValidation";
import useForm from "./useFrom";

export const Form = () => {
  const { handleChange, handleSubmit, values, errors, userData } = useForm(login , validate);

  function login() {
    console.log("No errors, submit callback called!");
  }

  // console.log("Value is" , values);
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
        {/* <label>PassWord</label>
        <input
          autoComplete="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
        />
        <br /> <br />
        {errors.password && <p>{errors.password}</p>} */}
      
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
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
