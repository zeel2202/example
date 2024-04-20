import React, { useState } from "react";
import useAray from "./useAray";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

function CustomHook() {
  const [aray1, setAray1] = useState([]);
  const [obj, setobj] = useState({})

  let [getlocalData, setlocalData] = useLocalStorage()

  const aray = [
    {
      name: "oscar",
      pin: 65665,
      phone: 656656,
    },
    {
      name: "Career",
      pin: 3211,
      phone: 86268,
    },
    {
      name: "Point",
      pin: 9897,
      phone: 69898452,
    },
  ];
  const data = useAray(aray);
  useEffect(() => {
    console.log(getlocalData('aray'));
  }, [])

  console.log(getlocalData('aray'));
  const getData = (e) => {
    obj[e.target.name] = e.target.value
    setobj({ ...obj })
  };
  const saveData = () => {
    aray1.push(obj)
    setAray1([...aray1])
    setlocalData("aray", aray1)
  };
  return (
    <div>
      <input type="text" name="name" onChange={getData} />
      <input type="te xt" name="email" onChange={getData} />
      <button type="button" onClick={saveData}>Save</button>
    </div>
  );
}

export default CustomHook;
