import React, { useState } from "react";

const useToDos = () => {
  const [toDosData, setToDosData] = useState({
    text: "",
  });

  const handleToDos = (e) => {
    const { name, value } = e.target;
    setToDosData({
      ...toDosData,
      id: Math.random() * 1000,
      [name]: value,
      completed: false,
    });
  };

  return [handleToDos, toDosData, setToDosData];
};

export default useToDos;
