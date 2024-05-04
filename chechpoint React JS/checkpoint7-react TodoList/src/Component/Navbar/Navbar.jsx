import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM"; // Vérification si l'heure est AM ou PM

    // Ajout d'un zéro devant les chiffres inférieurs à 10
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    // Convertir l'heure au format 12 heures
    const formattedHour12 = formattedHour % 12 === 0 ? 12 : formattedHour % 12;

    return `${formattedHour12}:${formattedMin}:${formattedSec} ${ampm}`;
  };

  const getGreeting = (date) => {
    const hour = date.getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 16) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <>
      <div className="header">
        <h2>
          <span>{getGreeting(currentDate)},</span> Paul
        </h2>
        <h2>My Todo List 📜 </h2>
        <p className="time">
          Time : <span>{formatTime(currentDate)}</span>
        </p>
      </div>
      <nav className="navbar">
        <Link className="links" to="/">
          Task List
        </Link>
        <Link className="links" to="/taskcomplete">
          Task Complete
        </Link>
        <Link className="links" to="/tasktodo">
          Task To Do
        </Link>
        <Link className="links" to="/taskform">
          Add Task
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
