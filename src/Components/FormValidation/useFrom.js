import { useEffect, useState } from "react";

const useForm = (addUser, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      addUser();
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  // console.log("SetError return Error Object", errors);

  /// Handle Change of File Handle Change
  const fileHandleChange = (e) => {
    const { name } = e.target;
    const filesData = e.target.files[0];
    setValues({ ...values, [name]: filesData });
  //   console.log("State Variable Data inside fileHandleChange", values);
   };

  //// handleChange function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("<----- FileData is ------->", fileData);
    setValues({ ...values, [name]: value });
  };
  // console.log("State Variable  Data  outside fileHandleChange", values);

  return { handleChange, handleSubmit, fileHandleChange, values, errors };
};

export default useForm;
