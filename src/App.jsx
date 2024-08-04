// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'math', completed: true },
    { name: 'Arabic', completed: false },
    { name: 'English', completed: true },
  ];

  return (
    <>
      <h1>courses or modules List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : 'not-completed'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
