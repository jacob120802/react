"use client"
import axios from "axios";
import React, {useEffect, useState} from "react";

const page = (props) => {
  const[Images, setImages] = useState([]);

  useEffect(()=>{
    getImages()
  },[])
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data)
      console.log(Images)
    } catch (error) {
      console.error("Error fetching Images.");
    }

  }
  const [sName, changesName] = useState("Abraham")
  console.log(props.marks)
  return (
    <>
      
      <h1 className="font-bold text-xl">Hi {props.marks} {sName}</h1>
      <button
        onClick={() => {
          props.changeMarks("Jacob")}}
        className="bg-gray-400 px-5 py-2 mt-5 rounded text-white font-bold"
      >
        Correct Me
      </button>
      <div className="p-10">{Images.map((img,i)=>{
        return <img
        key={i}
        src={img.download_url}
        width={300}
        height={300}
        className="m-10 rounded inline-block"
        />
      })}</div>
      <button onClick={getImages} className="px-5 py-3 bg-green-600 text-white font-bold">
        Get Images
      </button>
    </>
  );
};

export default page;
