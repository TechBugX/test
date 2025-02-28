import React, { useEffect, useState } from "react";
import "./VideoList.css";
import { useParams } from "react-router-dom";

import { supabase } from "../../supabaseClient";

// const videos = [
//   { id: 1, title: "Introduction to React", duration: "10:30" },
//   { id: 2, title: "State and Props", duration: "15:20" },
//   { id: 3, title: "React Hooks Overview", duration: "12:45" },
//   { id: 4, title: "Building a Todo App", duration: "18:00" },
// ];

const VideoList = ({ onSelectVideo }) => {
  const { link } = useParams();

  const [data, setData] = useState([]);



  useEffect(() => {
    getProducts();

  },[]);

  async function  getProducts(){
    try {
      const {data,error} = await supabase
      .from(`${link}`)
      .select('*');
      if (error) throw error;
      if(data !== null){
        setData(data);
      }

    } catch (error) {
      alert(error.message);
    }

  }




  // console.log(data);


  return (
    <div className="video-list">
      <h1 className="list-header">{link}</h1>
      {data.map((data, index) => (
        <a href={`#/vid-display/${link}/${data.id}`} >
        <div key={index} className="video-item" >
          <h4>{data.title}</h4>
          {/* <p>{video.duration}</p> */}
        </div>
        </a>
      ))}
    </div>
  );
};

export default VideoList;
