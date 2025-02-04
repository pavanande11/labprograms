//Main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lab5 from './lab5/Lab5'
// import Lab3 from './lab3/Lab3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Lab3 /> */}
    <Lab5 />
  </StrictMode>,
)
