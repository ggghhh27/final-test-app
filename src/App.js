import logo from './logo.svg';
import './App.css';
import './tailwind.css'

function App() {
  return (
    <div className="block w-full h-32">
      <header className="w-full h-40 bg-blue-900">
        <ul className="p-10 text-white">
          <li><a href="#">About Us</a></li>
          <li><a href="#">How does it work?</a></li>
        </ul>
        <div className="flex justify-between">
          <div className="display-flex">
            <h1><a href="#">a</a></h1>
            <ul className="flex">
              <li><a href="#">General Health</a></li>
              <li className="mr-4"><a href="#">Beauty</a></li>
              <li className="mr-4"><a href="#">Hospital &amp; Doctor</a></li>
              <li className="mr-4"><a href="#">Deals</a></li>
              <li className="mr-4"><a href="#">Article &amp; Experts</a></li>
            </ul>
          </div>
        </div>
      </header>
      <p className="inline-block text-right text-9xl">Text test</p>
      <span className="block w-72 h-32 text-center bg-red-500 text-green-100 rounded-lg">Text test2</span>
      <ul className="block w-72 h-32 bg-gradient-to-r from-yellow-200 via-indigo-500 to-pink-300 text-center">
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
  );
}

export default App;
