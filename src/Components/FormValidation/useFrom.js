import { useState } from "react";


const useForm = (login , validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    // if (Object.keys(errors).length === 0 )  {
    //   setUserData([...userData, values]);
    // } else {
    //     e.preventDefault()
    // }
  };
  console.log("SetError return Error Object", errors);
  console.log(" Ather Perform Validation is Array Contain Data is", userData);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("The name and value is " + name + " and " + value);

    setValues({ ...values, [name]: value });
  };

  return { handleChange, handleSubmit, values, errors, userData };
};

export default useForm;
