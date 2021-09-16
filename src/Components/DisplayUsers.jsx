import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayUsers = (props) => {
  const [userData, setuserData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users")
  //     .then((response) => {
  //       //   console.log("Response is Displayed", response);
  //       setuserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error is", error);
  //     });
  // }, []);
  const getUsersData = async () => {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  };

  useEffect(() => {
    const getallUsers = async () => {
      const getallUser = await getUsersData();
      if (getallUser) setuserData(getallUser);
    };

    getallUsers();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then((res) => console.log("Deleted", res))
      .catch((err) => console.error(err));
  };

  /// Store User data in State Variable

  //   const tableData = userData.map((user) => {
  //         return <tr key={user.id}>
  //              <td>{user.name}</td>
  //              <td>{user.email}</td>
  //         </tr>
  //   })

  //   console.log("Data Fetch in Display User Component", userData);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.userValues.map(user => (
                     <tr>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <rd><button type="button" onClick={deleteUser}>delete</button></rd>
                     </tr>
               ))}   */}

          {userData !== null &&
            userData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayUsers;
