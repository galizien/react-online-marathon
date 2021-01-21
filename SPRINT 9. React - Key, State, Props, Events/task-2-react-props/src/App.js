import React from 'react';
import './App.css';
import First from "./First"

export default function App() {
  const list = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art Design",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage",
    "File Sharing",
    "Animals",
    "Continuous Integration",
    "Cryptocurrency"
  ];



  return (
    <div>
      <First list={list.map(element => element.toLowerCase())} />
    </div>
  );
}

