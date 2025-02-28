import React from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS and JavaScript to build web applications.",
    image: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
    link:"web_development_tutorial"
  },
  {
    id: 2,
    title: "React JS",
    description: "Learn ReactJs to build modern web applications.",
    image: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png",
    link: "react_js_tutorial"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Explore Node.js,Flask and Django for backend services.",
    image: "https://acropolium.com/img/articles/find-backend-developers/img01.jpg",
    link: "backend_development_tutorial",
  },
  // {
  //   id: 4,
  //   title: "Cyber Security",
  //   description: "Understand network security, ethical hacking, and risk management.",
  //   image: "https://source.unsplash.com/400x300/?security,hacking",
  // },
];

const Courses = () => {
  return (
    <div className="outer_section">
    <h1 className="courses-heading">Resources</h1>
    <div className="courses-container">
    
      {courses.map((course) => (
        <a key={course.id} href={`#/course-list/${course.link}`}>
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
        </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default Courses;
