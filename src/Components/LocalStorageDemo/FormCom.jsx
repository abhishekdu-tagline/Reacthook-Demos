import React, { useEffect, useState } from "react";

export const FormCom = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "Abhishek",
      Technology: "React JS",
    },
    {
      id: 2,
      name: "Chirag",
      Technology: "React JS",
    },
  ]);

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setUserData(userData);
    console.log("userData: " + JSON.stringify(userData));
    localStorage.setItem("Data", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    let fetchUserData = JSON.parse(localStorage.getItem("Data"));
    console.log(
      " Fetch User Data from Local Storage: " + JSON.stringify(fetchUserData)
    );
    setShowData(fetchUserData);
  }, []);

  console.log(
    "!---------- Data From Fetch From LocalStorage ------------",
    showData
  );

  const deleteUser = (id) => {
    console.log("id is " + id);
     let fillteredUser = showData.filter((element) =>{
           return element.id !== id;
     })
     console.log('!------ FilltredData ---------' , fillteredUser);
     setShowData(fillteredUser);
     localStorage.setItem("Data" , JSON.stringify(fillteredUser));  
  };
  return (
    <>
      <h4>Display Data From Local Storage</h4>

      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Technology</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((element) => {
            return (
              <tr key={element.id}>
                <td> {element.name} </td>
                <td> {element.Technology} </td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(element.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
