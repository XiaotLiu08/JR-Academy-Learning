// App.jsx - 示例使用
import React from 'react';
import CourseCard from './CourseCard.jsx';
// import CourseCard from './CourseCardClass.jsx';
import './App.css';

const App = () => {
  // 示例课程数据
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      price: 49.99,
      language: "English",
      duration: "8 weeks",
      location: "Online",
      difficulty: "Beginner",
      isNew: true,
      imageUrl: "https://via.placeholder.com/320x180?text=React+Course",
      isCompleted: false
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      price: 79.99,
      language: "English",
      duration: "10 weeks",
      location: "Online",
      difficulty: "Advanced",
      isNew: false,
      imageUrl: "https://via.placeholder.com/320x180?text=JavaScript+Course",
      isCompleted: true
    },
    {
      id: 3,
      title: "Introduction to Python",
      price: 39.99,
      language: "English",
      duration: "6 weeks",
      location: "Hybrid",
      difficulty: "Intermediate",
      isNew: true,
      imageUrl: "https://via.placeholder.com/320x180?text=Python+Course",
      isCompleted: false
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>MOOC Platform</h1>
      </header>

      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            price={course.price}
            language={course.language}
            duration={course.duration}
            location={course.location}
            difficulty={course.difficulty}
            isNew={course.isNew}
            imageUrl={course.imageUrl}
            isCompleted={course.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default App;