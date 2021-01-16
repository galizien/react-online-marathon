import React from 'react';
import './App.css';
import First from "./First"

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
].map(element => element.toLowerCase());


export default function App() {
  return (
    <div>
      <First list={list} />
    </div>
  );
}
