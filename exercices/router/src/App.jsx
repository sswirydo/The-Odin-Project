import { Link } from "react-router-dom";

import './App.css'

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li style={{display: 'flex', flexDirection: "column"}}>
            <Link to="profile">Profile page link</Link>
            <a href="profile">Profile page a</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;




