import React from 'react';
import './App.css';

const list = [{ name: "Animals", id: 1 },
{ name: "Anime", id: 2 },
{ name: "Anti-Malware", id: 3 },
{ name: "Art Design", id: 4 },
{ name: "Books", id: 5 },
{ name: "Business", id: 6 },
{ name: "Calendar", id: 7 },
{ name: "Cloud Storage", id: 8 },
{ name: "File Sharing", id: 9 },
{ name: "Animals", id: 10 },
{ name: "Continuous Integration", id: 11 },
{ name: "Cryptocurrency", id: 12 }]

export default function App() {
  return (
    <div>
      <ul>
        {list.map(element => <li key={element.id}>{element.name}</li>)}
      </ul>
    </div>
  );
}
