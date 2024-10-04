import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


function Component() {
  const [count, setCount] = useState(0);
  
  // infinite loop: causes render which re-renders this etc.
  setCount(count + 1); 

  console.log(count);

  return <h1>{count}</h1>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component/>
  </StrictMode>,
)
