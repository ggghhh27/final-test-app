import logo from './logo.svg';
import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="block w-32 h-32">
      <p className="text-right text-9xl">Text test</p>
      <span className="w-32 h-32 bg-red-500 text-green-600 rounded-lg">Text test2</span>
      <ul className="block w-72 h-32 bg-gradient-to-r from-yellow-200 via-indigo-500 to-pink-300 text-center">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
  );
}

export default App;
