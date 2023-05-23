import React, { useState } from "react";
import { questions } from "./accoridanApi";
import "./accordian.css";
import Myaccordian from "./Myaccordian";
const Accoridian = () => {
  const [data, setData] = useState(questions);
  return (
    <>
    <div className="container">
            <h1>React interview</h1>
      {data.map((curElem) => {
        const{id}=curElem;
        return <Myaccordian key={id} {...curElem}/>
      })}
      </div>
    </>
  );
};

export default Accoridian;
