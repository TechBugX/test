import React, { useEffect, useState } from "react";
import "./VideoIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { supabase } from "../../supabaseClient";


// const videos = [
//   { id: 1, title: "Introduction to React", src: "https://www.youtube.com/embed/s2skans2dP4?si=GT85x3FxQ5Tt5Dju" },
//   { id: 2, title: "State and Props", src: "https://www.youtube.com/embed/mr75zNOGFP8?si=mA9Jg5pbCvTYjASd" },
//   { id: 3, title: "React Hooks Overview", src: "https://www.youtube.com/embed/TNhaISOUy6Q?si=yd_haOVs6EfuMnWD" },
//   { id: 4, title: "Building a Todo App", src: "https://www.youtube.com/embed/RxPF47orKzo?si=fVpr6v5JAtlAsO3o" },
// ];

const VideoDisplay = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { link,id } = useParams();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(id-1);
  const navigate = useNavigate();





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
          setLoading(false);
        }
  
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
  
    }


  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="video-container">
      {loading ? (
        <p>Loading videos...</p>
      ) : data.length === 0 ? (
        <p>No videos found.</p>
      ) : (
        <>
          <h2>{data[currentVideoIndex]?.title}</h2>
          <div className="ratio ratio-16x9 invideo">
            <iframe
              src={data[currentVideoIndex]?.src}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-controls">
            <button onClick={handlePrev} disabled={data.length === 1}>Previous</button>
            <button onClick={handleNext} disabled={data.length === 1}>Next</button>
            {/* <Link to={`#/course-list/${link}`}> */}
            <button onClick={() => navigate(`/course-list/${link}`)}>Back to List</button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDisplay;
